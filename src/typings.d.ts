declare module 'particles.js' {
    export const particlesJS: {
        load: (id: string, configPath: string, callback?: () => void) => void;
    };
}