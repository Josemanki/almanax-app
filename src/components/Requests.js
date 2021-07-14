import "core-js/stable";
import "regenerator-runtime/runtime";
import moment from 'moment';

// Function to get the current day

async function getCurrentAlmanax() {
    const requestDate = moment().format('YYYY-MM-DD')
    const response = await fetch(`https://alm.dofusdu.de/dofus/en/${requestDate}`)
    return response.json()
}

// Function to get next 5 days

async function getFiveDays() {
    const response = await fetch('https://alm.dofusdu.de/dofus/en/ahead/5')
    return response.json()
}

// Function to get all available bonuses 
async function getBonusList() {
    const response = await fetch('https://alm.dofusdu.de/dofus/bonuses')
    return response.json()
}

// Function to get filtered array
async function getFilteredBonuses(period, bonus) {
    const response = await fetch(`https://alm.dofusdu.de/dofus/en/ahead/${period}/bonus/${bonus}`)
    return response.json()
}

export { getCurrentAlmanax, getFiveDays, getBonusList, getFilteredBonuses }

