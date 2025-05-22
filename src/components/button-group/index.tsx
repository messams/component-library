import Group from './gruop';
import FirstButton from './first-button';
import LastButton from './last-button';
import Button from './button';
import Divider from './devider';


// Define a type to extend Group with sub-components
type GroupComponent = typeof Group & {
    FirstButton: typeof FirstButton;
    LastButton: typeof LastButton;
    Button: typeof Button;
    Divider: typeof Divider;
};

// Attach components to Group as properties
const GroupComponents: GroupComponent = Group as GroupComponent;
GroupComponents.FirstButton = FirstButton;
GroupComponents.LastButton = LastButton;
GroupComponents.Button = Button;
GroupComponents.Divider = Divider;

export default GroupComponents;
