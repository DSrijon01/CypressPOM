describe('My 10th Test Suite', function() {
    it('Api Response Assertion', function() {
      // Api response check
      cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {


        "name": "Learn Appium Automation with Java",
        "isbn": "bcd",
        "aisle": "227",
        "author": "John foe"

        
      }).then(function(response) {
        expect(response.body).to.have.property("Msg", "successfully added");
        expect(response.status).to.eq(200);
      }).then(function(response) {
        if (response.body.Msg === "successfully added") {
          // Book was added successfully
          expect(response.status).to.eq(200);
        } else {
          // Book already exists, handle accordingly
          expect(response.status).to.eq(409); // You might want to use a different status code
          // Add further assertions for the error message if needed
          expect(response.body.Msg).to.eq("Book Already Exists");
        }
      });
    })
  });

// Alternative Scenario if the book already existis: 
// describe('My 10th Test Suite', function() {
//     it('Api Response Assertion', function() {
//       // Api response check
//       cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
//         "name": "Learn Appium Automation with Java",
//         "isbn": "unique_isbn", // Provide a unique ISBN
//         "aisle": "unique_aisle", // Provide a unique aisle
//         "author": "John foe"
//       }).then(function(response) {
//         if (response.body.Msg === "successfully added") {
//           // Book was added successfully
//           expect(response.status).to.eq(200);
//         } else {
//           // Book already exists, handle accordingly
//           expect(response.status).to.eq(409); // You might want to use a different status code
//           // Add further assertions for the error message if needed
//           expect(response.body.Msg).to.eq("Book Already Exists");
//         }
//       });
//     })
//   });
  