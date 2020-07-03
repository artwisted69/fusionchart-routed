import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'analytics',
        title    : 'Analytics',
        type     : 'group',
        icon: 'apps',
        children : [
            {
                id       : 'sample',
                title    : 'Sample',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'chart',
                url      : '/app/sample',
                
            }
        ]
    }
];
