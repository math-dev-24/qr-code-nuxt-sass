export type QrType = "url" | "vcard" | "text" | "email" | "sms" | "wifi" | "paypal" | "whatsapp" | "image" | "qrcode" | "call" | "event" | "social" | "scanQr" | "crypto";


export type QrTypeRounded = 'rounded' | 'dots' | 'classy' | 'classy-rounded' | 'square' | 'extra-rounded'
export const QrConstRounded: QrTypeRounded[] =["rounded", 'dots', 'classy', 'classy-rounded', 'square', 'extra-rounded']
export type QrTypeConersSquare = 'none' | 'square' | "dot" | 'extra-rounded'
export const QrConstConersSquare: QrTypeConersSquare[] = ['none', 'square', 'dot', 'extra-rounded']
export type QrTypeConersDots = 'none' | 'dot' | 'square'
export const QrConstConersDots: QrTypeConersDots[] = ["none", "square", "dot"]

export interface OptionsGradient {
    mode: "single" | "double" | "triple";
    type: "linear" | "radial";
    color1: string;
    color2: string;
    color3: string;
    percent_color2: number;
    rotation: number;
}

export interface OptionsGradientType {
    type: QrTypeConersDots | QrTypeConersSquare | QrTypeRounded;
    gradient: OptionsGradient;
}

export interface QrInterface {
    id: string;
    type: string;
    size: number;
    margin: number;
    value: string;
    dotsOptions: {
        type: QrTypeRounded
        gradient: OptionsGradient
    }
    conersSquareOptions: {
        type: QrTypeConersSquare;
        gradient: OptionsGradient;
    }
    conersDotsOptions: {
        type: QrTypeConersDots;
        gradient: OptionsGradient;
    }
    backgroundOptions: {
        gradient: OptionsGradient;
    }
    image: string;
    created_at: string;
}