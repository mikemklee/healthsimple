import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import fs from 'fs'
import csv from 'csv-parser'

dotenv.config()

// init client
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

async function insertExercises() {
    const exercises = []

    // read data from CSV file
    const stream = fs.createReadStream('tests/dummy-exercises.csv').pipe(csv())

    for await (const row of stream) {
        const { name, category, body_part } = row
        exercises.push({ name, category, body_part })
    }

    // insert data into database
    const { data, error } = await supabase.from('exercises').insert(exercises)

    if (error) {
        console.error('Error inserting data from CSV file', error)
    } else {
        console.log('Inserted data from CSV file', data)
    }
}

insertExercises()
