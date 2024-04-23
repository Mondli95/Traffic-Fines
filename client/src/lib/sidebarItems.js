import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

export const sidebar = [
    {
        id: 1,
        name: 'Add User',
        roles: ["admin"],
        icon: 'add-user.png'
    },
    {
        id: 2,
        name: 'Add Offence',
        roles: ["admin"],
        icon: '/add-offence.png'
    },
    {
        id: 3,
        name: 'Analytics',
        roles: ["admin"],
        icon: '/analytics.png'
    },
    {
        id: 4,
        name: 'Add Vehicle',
        roles: ["admin"],
        icon: '/add-vehicle.png'
    },
    {
        id: 5,
        name: 'View Offences',
        roles: ["admin","user"],
        icon: '/view-offence.png'
    },
    {
        id: 6,
        name: 'Unpaid Fines',
        roles: ["admin","user"],
        icon: '/unpaid-fines.png'
    },
    {
        id: 7,
        name: 'Paid Fines',
        roles: ["admin","user"],
        icon: '/paid-fines.png'
    }
]