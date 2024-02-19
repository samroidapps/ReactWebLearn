export const containerVariants = (delay = 0) => ({
    "offscreen": {
        y: 30,
        opacity: 0,
    },
    "onScreen": {
        y: 0,
        opacity: 1,
        transition: {
            delay,
            duration: 2,
            type: "spring",
        }
    }
})