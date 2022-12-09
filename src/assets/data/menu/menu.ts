import { Menu } from "../../../app/DTO/config/menu.dto";

export const MenuList : Menu[] = [
    {
        "title" : "propertiesSaleLabel",
        "route"  : "propertylist",
        "parameter" : "sale",
        "large_show" : true
    },
    {
        "title" : "propertiesRentLabel",
        "route"  : "propertylist",
        "parameter" : "rent",
        "large_show" : true
    },
    {
        "title" : "Find Agents",
        "route"  : "agentlist",
        "parameter" : "",
        "large_show" : false
    },
    {
        "title" : "Latest News & Events",
        "route"  : "new-list",
        "parameter" : "",
        "large_show" : false
    },
    {
        "title" : "FAQ",
        "route"  : "faq",
        "parameter" : "",
        "large_show" : false
    },
    {
        "title" : "About Us",
        "route"  : "about-us",
        "parameter" : "",
        "large_show" : false
    },
    {
        "title" : "Contact Us",
        "route"  : "contact-us",
        "parameter" : "",
        "large_show" : false
    }
]