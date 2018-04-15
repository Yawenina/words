/**
 * Created by yawenina on 4/8/18.
 */
export type alertType = "primary" | "success" | "danger" | "warning";

export interface alertObj {
    type: alertType,
    message: string,
}

export interface Word {
    word: string,
    meaning: string,
    en: string,
    cn: string,
}

export interface WordDAO extends Word {
    _id: string,
    created: Date
}
