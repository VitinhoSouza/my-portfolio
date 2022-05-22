import 'styled-components';

declare module 'styled-components'{
    export interface DefaultTheme{
        title: string;

        colors:{
            primary:string;
            background:string;
            background_card:string;
        
            text_primary:string;
            text_background:string;
            text_card:string;
        }
    }
}