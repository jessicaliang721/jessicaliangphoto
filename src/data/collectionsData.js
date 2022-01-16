import { toHeaderCase } from 'js-convert-case';

export const collectionsData = [
    {
        albumId: 'jUeAe3xyo3NhVAC29',
        coverImg: 'https://lh3.googleusercontent.com/pw/AM-JKLUT2TcEx2azGTnvQZVDIJUSEXHnNgj8YE6SeOJvsntwCZS0FKqby_8W_ows_Rq8beM55lm-PrRDW_Ozw2sbVxOgV4ndjyr3FO_cWZ_OPiC5hu7V-VKFGEVdIrknP1sIiPN2ZqnlHIYKbkeW7QxfgUPKVw',
        description: 'Exploring the beauty of the American southwest.',
        name: 'American Southwest'
    },
    {
        albumId: '8xFSkCPr7pCL5XLGA',
        coverImg: 'https://lh3.googleusercontent.com/pw/AM-JKLX9bIxj1ATG71ppN1szghUQFrMg9NmvJTTyWNKVDjgf2553kN3s0mhVGWqy5We64Vzd2O0RQpGxsGXntuTHXTmtARA0bgmEJKlaTlb13LlNMazFIsCGw_yvfcugfdFt_ncF3U3nZVj0PeHxsBraVFYf6w',
        description: 'Scenes from Cusco, Sacred Valley, the Inca Trail, and Lima in Peru.',
        name: 'Peru'
    }
]

export const getCollection = (inputName) => {
    const name = toHeaderCase(inputName);
    return collectionsData.find(
        collection => collection.name === name
    )
};
