use bookings;
db.dropDatabase();

db.bookings.insertMany([
  {
    guestName: "Stuart Meldrum",
    guestEmailAddress: "stuart@aol.co.uk",
    checkInStatus: true
  },
  {
    guestName: "Keith Campbell",
    guestEmailAddress: "campbell_ka@yahoo.co.uk",
    checkInStatus: true
  },
]);
