const https = require('https');

const DATABASE_URL = 'https://recruitment-be456-default-rtdb.firebaseio.com/portal_monitor.json';

const MAPPING = {
    '1': 'army-dssc',
    '2': 'navy-batch',
    '3': 'naf-bmtc',
    '5': 'police-constable',
    '6': 'nscdc-general',
    '7': 'frsc-recruitment',
    '8': 'fire-inspector',
    '9': 'immigration-inspector',
    '10': 'customs-supplementary',
    '11': 'efcc-investigator',
    '12': 'fcsc-entry-level',
    '13': 'nnpc-graduate',
    '14': 'cbn-entry-level',
    '15': 'nimc-staff',
    '16': 'ncc-entry-level',
    '17': 'nitda-it-officer',
    '18': 'faan-entry-level',
    '19': 'nimasa-marine',
    '20': 'nafdac-regulatory'
};

async function migrate() {
    try {
        console.log('Fetching current data from Firebase...');
        const response = await fetch(DATABASE_URL);
        const data = await response.json();

        if (!data) {
            console.log('No data found in Firebase.');
            return;
        }

        for (const oldId of Object.keys(data)) {
            if (oldId === '0' && data[oldId] === null) continue;

            if (MAPPING[oldId]) {
                const newId = MAPPING[oldId];
                const portalData = {
                    ...data[oldId],
                    id: newId
                };
                
                console.log(`Migrating ${oldId} -> ${newId}...`);
                const keyUrl = `https://recruitment-be456-default-rtdb.firebaseio.com/portal_monitor/${newId}.json`;
                const putResponse = await fetch(keyUrl, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(portalData)
                });

                if (putResponse.ok) {
                    console.log(`Successfully migrated ${newId}`);
                } else {
                    console.error(`Failed to migrate ${newId}: ${putResponse.status}`);
                }
            } else {
                console.log(`Skipping/Preserving: ${oldId}`);
            }
        }
        console.log('Migration process finished.');
    } catch (error) {
        console.error('Migration failed:', error);
    }
}

migrate();
