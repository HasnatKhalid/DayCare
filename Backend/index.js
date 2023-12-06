const axios = require('axios')
const express = require('express')
const bodyParser = require('body-parser')
const { v4: uuidv4 } = require('uuid');
const cors = require("cors");
const { db } = require('./firebase');
const {doc, updateDoc, Timestamp, getDoc } = require('firebase/firestore');

const app = express();
const PORT = 5000

app.use(bodyParser.json())
app.use(cors({
  origin: 'http://localhost:3000'
}))


app.get('/viewbookings', async (req, res) => {

    const bookingRef = doc(db, "data", "bookings")
    const docSnap = await getDoc(bookingRef)
    

    if (docSnap.exists()){
        res.json(docSnap.data().booking);
    }
})

app.post('/addbooking', async(req, res) => {

    const {petname, service, status} = req.body

    var bookings = []

    const bookingRef = doc(db, "data", "bookings")
    const docSnap = await getDoc(bookingRef)

    if (docSnap.data()){
        bookings = docSnap.data().booking;
        bookings.push({
            petname:petname,
            service: service,
            status: status
        })

        await updateDoc(bookingRef, {
            booking: bookings
        })
    }
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
