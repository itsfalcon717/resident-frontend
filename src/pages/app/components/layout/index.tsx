import React from 'react';
import SideBar from './side-bar';
import Header from './header';
import ActivateBar from './activate-bar';
import { useGlobalContext } from '../../../../context';
const Layout = ({ children }: { children: React.ReactNode }) => {
    const [state] = useGlobalContext()

    const [isTablet, setIsTablet] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(false);
    const [smallSideBar, setSmallSideBar] = React.useState(false)
    const [showArrowButton, setShowArrowButton] = React.useState(false)

    React.useEffect(() => {
        const handleResize = () => {
            setIsTablet(window.innerWidth <= 1000);
            setIsMobile(window.innerWidth <= 500);
        };
        console.log(isTablet)
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [isTablet, smallSideBar, isMobile]);

    React.useEffect(() => {
        isTablet ? setSmallSideBar(true) : setSmallSideBar(false)
    }, [isTablet, isMobile])

    const onSideBar = () => {
        setSmallSideBar(!smallSideBar)
        setShowArrowButton(false)
    }

    return (
        <div>
            {state.isLeaveInterview.status && <ActivateBar />}
            <Header />
            <div className={`${!isMobile ? "flex" : "relative"}`}>
                <SideBar smallSideBar={smallSideBar} isMobile={isMobile} onSideBar={onSideBar} showArrowButton={showArrowButton} onShowArrowButton={() => setShowArrowButton(!showArrowButton)} onSmallSideBar={() => setSmallSideBar(!smallSideBar)} />
                <div className={`${(smallSideBar || isMobile) ? "sm:ml-[55px]" : "sm:ml-[260px]"} mt-16 sm:mt-0 ml-2 sm:w-full`}>
                    {children}
                </div>
                {/* <Footer /> */}
            </div>
        </div>
    );
};

export default Layout;
