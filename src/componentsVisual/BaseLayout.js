import HeaderComponent from "./Header";
import LeftSidebarComponent from "./LeftSidebar";
import RightSidebarComponent from "./RightSidebar";
import FooterComponent from "./Footer";

export default function BaseLayout({children}) {
    return (
        <div id="BaseLayout">
            <HeaderComponent />
            <LeftSidebarComponent />
            {children}
            <RightSidebarComponent />
            <FooterComponent />
        </div>
    )
}