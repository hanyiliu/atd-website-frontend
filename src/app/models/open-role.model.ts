// Represents a role that links out (e.g., application form)
export interface OpenRole {
    title: string;
    link: string; // external URL for application
}

// Represents a role that is displayed without a link (informational / upcoming)
export interface OpenRoleNoLink {
    title: string;
}

// Grouped structure (Approach B) stored in roles.json
export interface RolesData {
    noLink: OpenRoleNoLink[];
    link: OpenRole[];
}