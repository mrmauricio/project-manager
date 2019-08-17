import React, { useState, useEffect, useMemo } from 'react';
import { MdNotifications, MdKeyboardArrowDown } from 'react-icons/md';

import { parseISO, formatDistance } from 'date-fns';

import api from '../../services/api';

import {
    Container,
    Badge,
    NotificationList,
    Scroll,
    Notification,
} from './styles';

export default function Notifications({ id }) {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [notifications, setNotifications] = useState([]);
    const [notificationClicked, setNotificationClicked] = useState(0);

    const hasUnread = useMemo(() => {
        Boolean(
            notifications.find(notification => notification.read === false)
        );
    }, [notifications]);

    // componentDidMount
    useEffect(() => {
        async function loadNotifications() {
            const response = await api.get(`notification?userId=${id}`);

            const data = response.data.map(notification => ({
                ...notification,
                createdAt: parseISO(notification.createdAt),
                timeDistance: formatDistance(
                    parseISO(notification.createdAt),
                    new Date(),
                    { addSuffix: true }
                ),
            }));

            const sortedData = data
                .slice()
                .sort((a, b) => b.createdAt - a.createdAt);

            setNotifications(sortedData);
        }

        loadNotifications();
    }, [id]);

    useEffect(() => {
        async function setNotificationsAsRead() {
            setLoading(true);

            const unreadNotifications = notifications.filter(
                notification => notification.read === false
            );

            if (unreadNotifications) {
                unreadNotifications.map(async notification => {
                    try {
                        await api.put(`notification/${notification.id}`, {
                            ...notification,
                            read: true,
                        });
                        await setNotifications(
                            notifications.map(n =>
                                n.id === notification.id
                                    ? { ...n, read: true }
                                    : n
                            )
                        );
                    } catch (err) {
                        setError(true);
                    }
                });
                setLoading(false);
            }
        }

        if (!visible && notificationClicked > 0 && !loading && !error) {
            setNotificationsAsRead();
        }
    }, [error, loading, notificationClicked, notifications, visible]);

    async function toggleNotificationList() {
        await setVisible(!visible);
        await setNotificationClicked(notificationClicked + 1);
    }

    return (
        <Container>
            <Badge onClick={toggleNotificationList} hasUnread={hasUnread}>
                <MdNotifications size={20} color="#191920" />
            </Badge>

            <NotificationList visible={visible}>
                <header>
                    <span>Notifications</span>
                </header>
                <Scroll>
                    {notifications.map(notification => (
                        <Notification
                            key={notification.id}
                            unread={!notification.read}
                        >
                            <img src={notification.fromUser.avatar} alt="" />
                            <div>
                                <p>{notification.content}</p>
                                <time>{notification.timeDistance}</time>
                            </div>
                        </Notification>
                    ))}
                </Scroll>
                <footer>
                    <button type="button">
                        <MdKeyboardArrowDown size={15} color="#191920" />
                        <span>Show All</span>
                    </button>
                </footer>
            </NotificationList>
        </Container>
    );
}
