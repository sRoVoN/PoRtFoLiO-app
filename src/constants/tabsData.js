import { HomeRounded, 
    FaceRounded, 
    TextSnippetRounded, 
    TerminalRounded, 
    MessageRounded, 
    ConnectWithoutContactRounded, 
    } from '@mui/icons-material';

    const tabProps = (index) => {
        return {
          id: `sidebar-tab-${index}`,
          "aria-controls": `tabpanel-${index}`
        }
      };
      export const TabsData = () => {
        const tabs = [
            {label: "Home Page", icon: <HomeRounded />, ...tabProps(0)},
            {label: "About Me", icon: <FaceRounded />, ...tabProps(1)},
            {label: "My Resume", icon: <TextSnippetRounded />, ...tabProps(2)},
            {label: "My Samples", icon: <TerminalRounded />, ...tabProps(3)},
            {label: "Student's Comments", icon: <MessageRounded />, ...tabProps(4)},
            {label: "Contact", icon: <ConnectWithoutContactRounded />, ...tabProps(5)}        
          ];
          return tabs;

      }
