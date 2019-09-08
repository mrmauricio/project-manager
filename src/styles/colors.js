import { darken, lighten } from 'polished';

export const colors = {
    // borders and fonts:
    black: '#191920',
    // buttons:
    blue: '#3b9eff',
    // buttons hover:
    get lightblue() {
        return darken(0.03, this.blue);
    },
    // main background:
    cyan: '#6ddbd7',
    // header background:
    get darkCyan15() {
        return darken(0.15, this.cyan);
    },
    // sign background:
    get darkCyan30() {
        return darken(0.3, this.cyan);
    },
    // icons, font selection:
    get lightCyan30() {
        return lighten(0.3, this.cyan);
    },
    gray: '#eee',
    // notifications:
    orange: '#ff892e',
    white: '#fff',
};
