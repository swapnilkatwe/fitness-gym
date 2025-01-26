export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    OurClasses = "ourclasses",
    ContactUs = "contactus"
}

// Function to get text for each key
export const getTitleForSelectedPage = (key: SelectedPage): string => {
    switch (key) {
      case SelectedPage.Home:
        return "Home";
      case SelectedPage.Benefits:
        return "Benefits";
    case SelectedPage.OurClasses:
        return "Our Classes";
    case SelectedPage.ContactUs:
        return "Contact Us";
      default:
        return "Home";
    }
  };

export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
}

export interface ClassType {
        name: string,
        description?: string,
        image: string,
}