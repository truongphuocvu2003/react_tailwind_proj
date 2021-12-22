function Footer(props) {
    const footerCss = 'fixed z-40 bottom-0 left-0 w-screen';
    const footerNavCss = 'w-full h-full flex items-center px-4 bg-white dark:bg-gray-800 shadow-[0_-15px_30px_0px_rgba(82,63,105,0.05)] transition-colors duration-400 ease-linear';
    return (
        <div className={'layout-footer ' + footerCss}>
            <div className={'layout-footer-nav ' + footerNavCss}>
                <div>
                    Footer
                </div>
            </div>
        </div>
    )
}

export default Footer
