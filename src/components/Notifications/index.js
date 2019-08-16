import React from 'react';

import { MdNotifications, MdKeyboardArrowDown } from 'react-icons/md';

import {
    Container,
    Badge,
    NotificationList,
    Scroll,
    Notification,
} from './styles';

export default function Notifications() {
    return (
        <Container>
            <Badge hasUnread>
                <MdNotifications size={20} color="#191920" />
            </Badge>

            <NotificationList>
                <header>
                    <span>Notifications</span>
                </header>
                <Scroll>
                    <Notification unread>
                        <img
                            src="https://avatars.dicebear.com/v2/avataaars/a.svg?options[top][]=shortHair&options[topChance]=91&options[hairColor][]=brown&options[accessories][]=prescription02&options[accessoriesChance]=100&options[facialHair][]=light&options[facialHairChance]=100&options[facialHairColor][]=brown&options[clothes][]=blazer&options[clothesColor][]=black&options[eyes][]=defaultValue&options[eyebrow][]=defaultValue&options[mouth][]=smile&options[skin][]=light"
                            alt=""
                        />
                        <div>
                            <p>
                                voce possui um novo agendamento para amanha
                                novoa agendamento para amanhanovo agendamento
                                para amanha
                            </p>
                            <time>há 2 dias</time>
                        </div>
                    </Notification>
                    <Notification unread>
                        <img
                            src="https://avatars.dicebear.com/v2/avataaars/a.svg?options[top][]=shortHair&options[topChance]=91&options[hairColor][]=brown&options[accessories][]=prescription02&options[accessoriesChance]=100&options[facialHair][]=light&options[facialHairChance]=100&options[facialHairColor][]=brown&options[clothes][]=blazer&options[clothesColor][]=black&options[eyes][]=defaultValue&options[eyebrow][]=defaultValue&options[mouth][]=smile&options[skin][]=light"
                            alt=""
                        />
                        <div>
                            <p>voce possui um novo agendamento para amanha</p>
                            <time>há 2 dias</time>
                        </div>
                    </Notification>
                    <Notification unread>
                        <img
                            src="https://avatars.dicebear.com/v2/avataaars/a.svg?options[top][]=shortHair&options[topChance]=91&options[hairColor][]=brown&options[accessories][]=prescription02&options[accessoriesChance]=100&options[facialHair][]=light&options[facialHairChance]=100&options[facialHairColor][]=brown&options[clothes][]=blazer&options[clothesColor][]=black&options[eyes][]=defaultValue&options[eyebrow][]=defaultValue&options[mouth][]=smile&options[skin][]=light"
                            alt=""
                        />
                        <div>
                            <p>
                                voce possui um novo agendamento para amanha
                                novoa agendamento para amanhanovo agendamento
                                para amanha
                            </p>
                            <time>há 2 dias</time>
                        </div>
                    </Notification>
                    <Notification>
                        <img
                            src="https://avatars.dicebear.com/v2/avataaars/a.svg?options[top][]=shortHair&options[topChance]=91&options[hairColor][]=brown&options[accessories][]=prescription02&options[accessoriesChance]=100&options[facialHair][]=light&options[facialHairChance]=100&options[facialHairColor][]=brown&options[clothes][]=blazer&options[clothesColor][]=black&options[eyes][]=defaultValue&options[eyebrow][]=defaultValue&options[mouth][]=smile&options[skin][]=light"
                            alt=""
                        />
                        <div>
                            <p>
                                voce possui um novo agendamento para amanha
                                novoa agendamento para amanhanovo agendamento
                                para amanha
                            </p>
                            <time>há 2 dias</time>
                        </div>
                    </Notification>
                    <Notification>
                        <img
                            src="https://avatars.dicebear.com/v2/avataaars/a.svg?options[top][]=shortHair&options[topChance]=91&options[hairColor][]=brown&options[accessories][]=prescription02&options[accessoriesChance]=100&options[facialHair][]=light&options[facialHairChance]=100&options[facialHairColor][]=brown&options[clothes][]=blazer&options[clothesColor][]=black&options[eyes][]=defaultValue&options[eyebrow][]=defaultValue&options[mouth][]=smile&options[skin][]=light"
                            alt=""
                        />
                        <div>
                            <p>
                                voce possui um novo agendamento para amanha
                                novoa agendamento para amanhanovo agendamento
                                para amanha
                            </p>
                            <time>há 2 dias</time>
                        </div>
                    </Notification>
                    <Notification>
                        <img
                            src="https://avatars.dicebear.com/v2/avataaars/a.svg?options[top][]=shortHair&options[topChance]=91&options[hairColor][]=brown&options[accessories][]=prescription02&options[accessoriesChance]=100&options[facialHair][]=light&options[facialHairChance]=100&options[facialHairColor][]=brown&options[clothes][]=blazer&options[clothesColor][]=black&options[eyes][]=defaultValue&options[eyebrow][]=defaultValue&options[mouth][]=smile&options[skin][]=light"
                            alt=""
                        />
                        <div>
                            <p>
                                voce possui um novo agendamento para amanha
                                novoa agendamento para amanhanovo agendamento
                                para amanha
                            </p>
                            <time>há 2 dias</time>
                        </div>
                    </Notification>
                    <Notification>
                        <img
                            src="https://avatars.dicebear.com/v2/avataaars/a.svg?options[top][]=shortHair&options[topChance]=91&options[hairColor][]=brown&options[accessories][]=prescription02&options[accessoriesChance]=100&options[facialHair][]=light&options[facialHairChance]=100&options[facialHairColor][]=brown&options[clothes][]=blazer&options[clothesColor][]=black&options[eyes][]=defaultValue&options[eyebrow][]=defaultValue&options[mouth][]=smile&options[skin][]=light"
                            alt=""
                        />
                        <div>
                            <p>
                                voce possui um novo agendamento para amanha
                                novoa agendamento para amanhanovo agendamento
                                para amanha
                            </p>
                            <time>há 2 dias</time>
                        </div>
                    </Notification>
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
