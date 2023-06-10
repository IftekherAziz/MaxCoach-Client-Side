# **Task description**

5. **Homepage:**

    - **Popular Classes Section -** Show relevant pictures related to the classes or activities. Have the top 6 classes based on the number of students.

    - **Popular Instructors Section -** Show relevant pictures related to the classes or activities. Show the top 6 instructors based on the number of students in their Class. However, selecting top instructors based on the number of students is optional, but you must show 6 instructors.
    
    - **Extra Section -** Add one relevant sections. Make it attractive :heart_eyes:. Try to use animation effects.


7. **Classes page:**
Show all approved classes on this page. Each Class will have the following:
   - Image
   - Name
   - Instructor name
   - Available seats
   - Price
   - Select Button. If the user is not logged in, then tell the user to log in before selecting the course. This button will be disabled if:
        - Available seats are 0
        - Logged in as admin/instructor
    - The class card background will be red if the available seats are 0.
  
  
8.  **Student Dashboard:**

    ***It will be private & only a student can access this route.***
    
     - **My Selected Classes:** The student will see all the Classes they booked after clicking the Select button. You must display the relevant information on the Class, Delete, and Pay buttons. More in point 9. On clicking the **Delete button**, a student can remove a selected Class from the list.

     - **My Enrolled Classes:**  Show all the Classes a student selected after successful payment.

9. **Payment: (Student Dashboard)**

    - **Pay button Action:** Upon clicking the **Pay button** for a Class on the My Selected Classes, the student will be redirected to the payment page to finalize their payment. After a successful payment, the **Available seats** for the particular Class will be reduced by 1. The Class information will be shown on the **My Enrolled Classes page**and removed from the **My Selected Classes page**.

    - Create a payment history page for students. It will show the payment made by that student. Make sure to sort the payment history descending. The newest payment will be at the top


10.  **Instructor Dashboard:**
 
      - **My Classes:**  Show all the Classes an instructor has added after clicking the **Add button** from the **Add a Class page**. Each Class will show relevant information, including **pending/ approved/ denied** status, **Total Enrolled Students**, **Feedback** & **Update button**.
        
        - **Total Enrolled Students:** Initially it will be zero. If any student has successfully booked the Class, show the total number of students.

        - **Feedback:** 
            - There will be no feedback if the Class is in pending or approved status.
            - If the Class is in the denied state by the admin, at that time, an admin can write feedback explaining why the Class was denied, which will appear in the feedback column.

    

11.  **Admin Dashboard:**
    <br/>
    ***It will be private & only an admin can access this route.***

       - **Manage Classes:** This page will show all the Classes. All the classes added by the Instructor from the **Add Class page** will be displayed here. Show the following information: **Class Image, Class name, Instructor name, Instructor email, Available seats, Price, Status(pending/approved/denied) 3 buttons( Approve, Deny and send feedback)**.
        
         >**Note:** By default, the status will be pending. When an admin clicks the Approve button, the status will be updated to approved. The Deny and the Approve button will become disabled.
        
         >**Note:** If the admin clicks the Deny button, the status will be updated to denied. The Deny and the Approve button will become disabled. 

         >**Note:** A modal will be opened When the admin clicks the send feedback button. Admin will write the approved/denied reason in a text field and send it to the Instructor. You can also do this in another route except for the modal.


    

12. Use **relevant icons** in your **dashboard menus**, animations on your website.\. You have to use **anyone** of the animation libraries below:
    - [Framer-motion](https://www.framer.com/motion/)
    - [React-awesome-reveal](https://react-awesome-reveal.morello.dev/)
    - [React-spring](https://www.react-spring.dev/)
    - [React-anime](https://github.com/juliangarnier/anime)


## :writing_hand: **Bonus Task:**

2. Create a readme for the client-side and write about your project.

    - Website name or logo or both
    - Minimum 5 points of your website features
    - Used packages/ technology name
    - Live site link












