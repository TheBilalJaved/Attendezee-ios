# Attendezee
qr attandence 
API Base Url
Url =  https://www.attendezz.com/dashboard/api/index.php?

Available API:
Login API
Update Password API
Forget Password API
Update User Profile API
User Data By Id API
Attendance API
Register User Device API
View Attendance By Month & Weak API
View Business Rules API


1) Login API

Base Url = https://www.attendezz.com/dashboard/api/index.php?

Action Variable = login

Required Parms:
action = $action;
user_email = $user_email;
user_password = $password;

Final Url: https://www.attendezz.com/dashboard/api/index.php?action=$action&user_email=$user_email&user_password=$password



2) Update Password API

Base Url = https://www.attendezz.com/dashboard/api/index.php?

Action Variable = update_password

Required Parms:
action = $action;
user_id = $user_id;
old_password = $old_password;
new_password = $new_password;
confirm_password = $confirm_password;

Final Url: https://www.attendezz.com/dashboard/api/index.php?action=$action&user_id=$user_id&old_password=$old_password&new_password=$new_password&confirm_password=$confirm_password




3) Forget Password API


Base Url =  https://www.attendezz.com/dashboard/api/index.php?

Action Variable = forgot_password_module

Required Parms:
action = $action;
user_email = $user_email;

Final Url: https://www.attendezz.com/dashboard/api/index.php?action=$action&user_email=$user_email

4) Update User Profile API

Base Url =  https://www.attendezz.com/dashboard/api/index.php?

Action Variable = update_user_profile

Required Parms:
action = $action;
user_id = $user_id;
user_first_name = $user_first_name;
user_last_name = $user_last_name;
user_phone = $user_phone;
user_address = $user_address
user_dob = $user_dob
date format = 1994-08-18


Final Url: https://www.attendezz.com/dashboard/api/index.php?action=$action&user_id=$user_id&user_first_name=$user_first_name&user_last_name=$user_last_name&user_phone=$user_phone&user_address=$user_address&user_dob=$user_dob

5) User Data By Id Api

Base Url = https://www.attendezz.com/dashboard/api/index.php?

Action Variable = get_user

Required Parms:
action = $action;
user_id = $user_id;z.com/dashboard/api/index.php?
Final Url: https://www.attendezz.com/dashboard/api/index.php?action=$action&user_id

6) Attendance API

Base Url =  https://www.attendezz.com/dashboard/api/index.php?

Action Variable = mark_attendance_geolocation

Required Parms:
action = $action;
emp_id = $emp_id;
Business_id = $business_id;
lat= $lat;
Lon = $lon;
Shift = $shift
Shift parms 
Start_shift
End_shift
Start_break
End_break

Final Url: 
https://attendezz.com/dashboard/api/index.php?action=$action&emp_id=$emp_id&business_id=$business_id&lat=$lat&lon=$lon&shift=$shift

7 ) Register User Device API

Base Url =  https://www.attendezz.com/dashboard/api/index.php?

Action Variable = visitor_history

Required Parms:
action = $action;
emp_id = $emp_id;
user_device = $user_device;
banner_link = $banner_link;

Final Url: 
https://www.attendezz.com/dashboard/api/index.php?action=$action&emp_id=$emp_id&user_device=$user_device&banner_link=$banner_link

8 ) View attendance Of Month & Week API

Base Url =  https://www.attendezz.com/dashboard/api/index.php?

Action Variable = view_attendance

Required Parms:
action = $action;
emp_id = $emp_id;
datad = $date;
business_id = $business_id;
filter = byweek, bymonth

Final Url: 
https://www.attendezz.com/dashboard/api/index.php?action=$action&emp_id=$emp_id&dated=$date&business=$business_id&filter=$filter

9 ) Get Business Rules API

Base Url =  https://www.attendezz.com/dashboard/api/index.php?

Action Variable = business_rules

Required Parms:
action = $action;
business_id= $business_id;

Final Url: 
https://www.attendezz.com/dashboard/api/index.php?action=$action&business_id=$business_id






