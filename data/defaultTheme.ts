import type {
    OptionsGradient,
    QrTypeConersDots,
    QrTypeConersSquare,
    QrTypeRounded
} from "~/shared/interfaces/QrInterace";


export interface DefaultThemeInterface {
    name : string;
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
    imageDemo: string;
    custom: boolean;
}

export const defaultTheme: DefaultThemeInterface = {
    name: "",
    image: '',
    imageDemo: '',
    custom: true,
    dotsOptions: {
        type: "rounded",
        gradient: {
            mode: "single",
            color1: "#000000",
            color2: "#ff0000",
            color3: "#ff7575",
            percent_color2: 50,
            rotation: 0,
            type: "linear"
        }
    },
    conersSquareOptions: {
        type: "square",
        gradient: {
            mode: "single",
            color1: "#000000",
            color2: "#ff0000",
            color3: "#ff7575",
            percent_color2: 50,
            rotation: 0,
            type: "linear"
        }
    },
    conersDotsOptions: {
        type: "none",
        gradient: {
            mode: "single",
            color1: "#000000",
            color2: "#ff0000",
            color3: "#ff7575",
            percent_color2: 50,
            rotation: 0,
            type: "linear"
        }
    },
    backgroundOptions: {
        gradient: {
            mode: "single",
            color1: "#ffffff",
            color2: "#1051c8",
            color3: "#ff7575",
            percent_color2: 50,
            rotation: 0,
            type: "linear"
        }
    },
}

export const DEFAULT_THEME: DefaultThemeInterface[] = [
    {
        name: "Youtube",
        image: 'logo/youtube.svg',
        imageDemo: 'exemple/youtube.png',
        custom: false,
        dotsOptions: {
            type: 'dots',
            gradient: {
                mode: 'double',
                color1: '#EB0F0F',
                color2: '#F47B7B',
                color3: '#ff7575',
                percent_color2: 50,
                rotation: 0,
                type: "linear"
            }
        },
        conersSquareOptions: {
            type: 'dot',
            gradient: {
                mode: 'single',
                color1: '#EB0F0F',
                color2: '#ff0000',
                color3: '#ff7575',
                percent_color2: 50,
                rotation: 0,
                type: "linear"
            }
        },
        conersDotsOptions: {
            type: 'square',
            gradient: {
                mode: 'single',
                color1: '#EB0F0F',
                color2: '#ff0000',
                color3: '#ff7575',
                percent_color2: 50,
                rotation: 0,
                type: "linear"
            }
        },
        backgroundOptions: {
            gradient: {
                mode: 'single',
                color1: '#ffffff',
                color2: '#1051c8',
                color3: '#ff7575',
                percent_color2: 50,
                rotation: 0,
                type: "linear"
            }
        },
    },
    {
        name: "Twitter",
        image: 'logo/twitter.svg',
        imageDemo: 'exemple/twitter.png',
        custom: false,
        dotsOptions: {
            type: 'classy-rounded',
            gradient: {
                mode: 'single',
                color1: '#00ACEE',
                color2: '#F47B7B',
                color3: '#ff7575',
                percent_color2: 50,
                rotation: 0,
                type: "linear"
            }
        },
        conersSquareOptions: {
            type: 'dot',
            gradient: {
                mode: 'single',
                color1: '#00ACEE',
                color2: '#ff0000',
                color3: '#ff7575',
                percent_color2: 50,
                rotation: 0,
                type: "linear"
            }
        },
        conersDotsOptions: {
            type: 'dot',
            gradient: {
                mode: 'single',
                color1: '#00ACEE',
                color2: '#ff0000',
                color3: '#ff7575',
                percent_color2: 50,
                rotation: 0,
                type: "linear"
            }
        },
        backgroundOptions: {
            gradient: {
                mode: 'single',
                color1: '#ffffff',
                color2: '#1051c8',
                color3: '#ff7575',
                percent_color2: 50,
                rotation: 0,
                type: "linear"
            }
        },
    },
    {
        name: "Facebook",
        image: 'logo/facebook.svg',
        imageDemo: 'exemple/facebook.png',
        custom: false,
        dotsOptions: {
            type: 'rounded',
            gradient: {
                mode: 'double',
                color1: '#3b5998',
                color2: '#5581dd',
                color3: '#5581dd',
                percent_color2: 50,
                rotation: 0,
                type: "radial"
            }
        },
        conersSquareOptions: {
            type: 'square',
            gradient: {
                mode: 'single',
                color1: '#5581dd',
                color2: '#ff0000',
                color3: '#ff7575',
                percent_color2: 50,
                rotation: 0,
                type: "linear"
            }
        },
        conersDotsOptions: {
            type: 'dot',
            gradient: {
                mode: 'single',
                color1: '#5581dd',
                color2: '#ff0000',
                color3: '#ff7575',
                percent_color2: 50,
                rotation: 0,
                type: "linear"
            }
        },
        backgroundOptions: {
            gradient: {
                mode: 'single',
                color1: '#ffffff',
                color2: '#1051c8',
                color3: '#ff7575',
                percent_color2: 50,
                rotation: 0,
                type: "linear"
            }
        },
    },
    {
        name: 'Telegram',
        image: "logo/telegram.svg",
        imageDemo: "exemple/telegram.png",
        custom: false,
        dotsOptions: {
            type: "dots",
            gradient: {
                mode: "single",
                color1: "#0b9ee8",
                color2: "#ff0000",
                color3: "#ff7575",
                percent_color2: 50,
                rotation: 0,
                type: "linear"
            }
        },
        conersSquareOptions: {
            type: "extra-rounded",
            gradient: {
                mode: "single",
                color1: "#0088cc",
                color2: "#ff0000",
                color3: "#ff7575",
                percent_color2: 50,
                rotation: 0,
                type: "linear"
            }
        },
        conersDotsOptions: {
            type: "dot",
            gradient: {
                mode: "single",
                color1: "#0088cc",
                color2: "#ff0000",
                color3: "#ff7575",
                percent_color2: 50,
                rotation: 0,
                type: "linear"
            }
        },
        backgroundOptions: {
            gradient: {
                mode: "single",
                color1: "#ffffff",
                color2: "#1051c8",
                color3: "#ff7575",
                percent_color2: 50,
                rotation: 0,
                type: "linear"
            }
        }
    },
    {
        name: "Bitcoin",
        image: 'logo/bitcoin.svg',
        imageDemo: 'exemple/bitcoin.png',
        custom: false,
        dotsOptions: {
            type: 'dots',
            gradient: {
                mode: 'double',
                color1: '#FFD700',
                color2: '#D79A10',
                color3: '#D79A10',
                percent_color2: 50,
                rotation: 0,
                type: "radial"
            }
        },
        conersSquareOptions: {
            type: 'extra-rounded',
            gradient: {
                mode: 'single',
                color1: '#D79A10',
                color2: '#ff0000',
                color3: '#ff7575',
                percent_color2: 50,
                rotation: 0,
                type: "linear"
            }
        },
        conersDotsOptions: {
            type: 'dot',
            gradient: {
                mode: 'single',
                color1: '#D79A10',
                color2: '#ff0000',
                color3: '#ff7575',
                percent_color2: 50,
                rotation: 0,
                type: "linear"
            }
        },
        backgroundOptions: {
            gradient: {
                mode: 'single',
                color1: '#ffffff',
                color2: '#1051c8',
                color3: '#ff7575',
                percent_color2: 50,
                rotation: 0,
                type: "linear"
            }
        },
    }
]