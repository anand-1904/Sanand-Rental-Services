// Navigation function for Home Page
function navigateToPage(page) {
    window.location.href = page;
}

// Google Form Redirection function for Owner and Tenant Pages
function openGoogleForm(propertyType, userType) {
    let formUrl = '';

    if (userType === 'owner') {
        // URLs for the owner-related Google Forms
        switch (propertyType) {
            case 'flat':
                formUrl = 'https://forms.gle/dZcPfyjTarthc21R8'; // Flat form for owner
                break;
            case 'house':
                formUrl = 'https://forms.gle/dZcPfyjTarthc21R8'; // House form for owner
                break;
            case 'shop':
                formUrl = 'https://forms.gle/dZcPfyjTarthc21R8'; // Shop form for owner
                break;
            default:
                console.error('Invalid property type for owner');
                return;
        }
    } else if (userType === 'tenant') {
        // URLs for the tenant-related Google Forms
        switch (propertyType) {
            case 'flat':
                formUrl = 'https://forms.gle/VroWsQDRMFiy8sFo7'; // Flat form for tenant
                break;
            case 'house':
                formUrl = 'https://forms.gle/VroWsQDRMFiy8sFo7'; // House form for tenant
                break;
            case 'shop':
                formUrl = 'https://forms.gle/VroWsQDRMFiy8sFo7'; // Shop form for tenant
                break;
            default:
                console.error('Invalid property type for tenant');
                return;
        }
    } else {
        console.error('Invalid user type');
        return;
    }

    // Redirect to the appropriate form URL
    window.location.href = formUrl;
}

// Stripe payment setup (a basic example)
var stripe = Stripe('your-publishable-key-here');
function handlePayment() {
    stripe.redirectToCheckout({
        sessionId: 'your-session-id'
    }).then(function (result) {
        console.error(result.error.message);
    });
}

// Tracking function for Request Tracking Page
function trackRequest() {
    const ticketNumber = document.getElementById('ticketNumber').value;

    // Mock function to simulate tracking
    const trackingData = {
        "12345": "Form submitted",
        "67890": "Verification by call completed",
        "ABCDE": "Data of property allotted on email"
    };

    const result = trackingData[ticketNumber] || "Invalid ticket number";
    document.getElementById('trackingResult').innerText = result;
}
