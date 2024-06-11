/**
 * Create a function that calculates overtime and pay associated with overtime 
 * working 9 to 5: operating hours
 * 
 * After 5pm is overtime
 * Your function gets an array with 4 values:
 * 
 * 1- start of working day, in decimal format, (24-hour day notation)
 * 2- End of working day.(Same format)
 * Hourly rate
 * 3- Overtime multiplier
 * 4- Your function should spit out:
 * 
 * Note: ($+) earned that day (rounded to the nearest hundreth)
 * 
 */

function calculateOvertimePay(start_time, end_time, hourly_rate, overtime_multiplier) {
    // Define standard working hours (9 AM to 5 PM)
    const standard_start = 9.0;
    const standard_end = 17.0;

    // Initialize regular and overtime hours
    let regular_hours = 0.0;
    let overtime_hours = 0.0;

    // Calculate regular hours worked
    if (end_time > standard_end) {
        // If end_time is after 5 PM, calculate regular hours up to 5 PM
        if (start_time < standard_end) {
            regular_hours = standard_end - Math.max(start_time, standard_start);
        }
        // Calculate overtime hours after 5 PM
        overtime_hours = end_time - standard_end;
    } else {
        // If end_time is before or at 5 PM, all worked hours are regular
        regular_hours = end_time - Math.max(start_time, standard_start);
    }

    // Calculate the pay
    const regular_pay = regular_hours * hourly_rate; // Regular pay calculation
    const overtime_pay = overtime_hours * hourly_rate * overtime_multiplier; // Overtime pay calculation
    const total_pay = regular_pay + overtime_pay; // Total pay calculation

    // Return the total pay rounded to the nearest hundredth
    return total_pay.toFixed(2);
}

// Example usage:
const start_time = 9.0; // Start of working day
const end_time = 21.0; // End of working day
const hourly_rate = 20.0; // Hourly rate
const overtime_multiplier = 1.5; // Overtime multiplier

console.log(`$${calculateOvertimePay(start_time, end_time, hourly_rate, overtime_multiplier)}`); // Output the calculated pay
