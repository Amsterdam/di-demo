const isMobile = (userAgent = ''): boolean => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
        .test(userAgent || navigator.userAgent);
};

export default isMobile;