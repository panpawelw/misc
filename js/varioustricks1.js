// Nullish coalescing - handle defaults the right way
const name = user.name ?? 'Guest';

// Optional chaining - no more "undefined" errors
const city = user?.address?.city;

// Destructuring - cleaner access to object properties
const {email, age} = user;

// Short-circuit evaluation - skip the ifs
isLoggedin && showDashboard();

// Array methods - readable and functional
const activeUsers = users.filter(u => u.isActive).map(u => u.name);