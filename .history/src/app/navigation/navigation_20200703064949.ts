import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'analytics',
        title    : 'Analytics',
        type     : 'group',
        icon: 'apps',
        children : [
            {
                id       : 'overview',
                title    : 'Overview',
                type     : 'item',
                icon     : 'apps',
                url      : '/app/overview',
                
            },
            {
                id       : 'chart',
                title    : 'Chart',
                type     : 'item',
                icon     : 'chart',
                url      : '/app/chart',
                
            }
        ]
    }
];
