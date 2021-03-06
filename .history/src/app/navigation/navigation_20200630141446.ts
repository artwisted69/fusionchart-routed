import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'analytics',
        title    : 'Analytics',
        translate: 'NAV.ANALYTICS',
        type     : 'group',
        children : [
            {
                id       : 'sample',
                title    : 'Sample',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'chart',
                url      : '/sample',
                
            }
        ]
    }
];
