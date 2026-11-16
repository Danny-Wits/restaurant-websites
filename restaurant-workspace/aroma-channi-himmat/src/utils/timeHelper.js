// Helper to compute live restaurant opening status in Indian Standard Time (IST - UTC+5:30)

export function getRestaurantStatus() {
  // Current time in IST
  const now = new Date();
  const utcOffset = now.getTime() + now.getTimezoneOffset() * 60000;
  const istTime = new Date(utcOffset + 3600000 * 5.5);
  
  const hours = istTime.getHours();
  const minutes = istTime.getMinutes();
  const decimalHour = hours + minutes / 60;
  
  // Lunch: 12:30 PM (12.5) to 4:00 PM (16.0)
  // Dinner: 7:00 PM (19.0) to 11:30 PM (23.5)
  // Kitchen order cut-off: 11:00 PM (23.0)
  
  if (decimalHour >= 12.5 && decimalHour < 16.0) {
    return {
      isOpen: true,
      service: "Lunch Service",
      message: "Open Now • Lunch Service until 4:00 PM",
      nextAction: "Tables Available for Walk-in & Reservation"
    };
  } else if (decimalHour >= 19.0 && decimalHour < 23.0) {
    return {
      isOpen: true,
      service: "Dinner Service",
      message: "Open Now • Dinner Service until 11:30 PM",
      nextAction: "Live Charcoal Tandoor & Wazwan Active"
    };
  } else if (decimalHour >= 23.0 && decimalHour < 23.5) {
    return {
      isOpen: true,
      service: "Late Dinner (Kitchen Closing)",
      message: "Open Now • Kitchen Final Call (Closes 11:00 PM)",
      nextAction: "Desserts & Beverages Only"
    };
  } else if (decimalHour >= 16.0 && decimalHour < 19.0) {
    return {
      isOpen: false,
      service: "Dinner Prep",
      message: "Dinner Opens at 7:00 PM",
      nextAction: "Evening Reservations Recommended"
    };
  } else if (decimalHour < 12.5) {
    return {
      isOpen: false,
      service: "Lunch Prep",
      message: "Lunch Opens at 12:30 PM",
      nextAction: "Accepting Advance Bookings"
    };
  } else {
    return {
      isOpen: false,
      service: "Closed for Night",
      message: "Closed for the Night • Opens Tomorrow 12:30 PM",
      nextAction: "Online Reservations Open 24/7"
    };
  }
}
