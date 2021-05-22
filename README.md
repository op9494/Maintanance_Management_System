# Maintanance_Management_System
This is an multi platform application to support in all main OS.This application consist of all the maintanance activities like periodic maintance,timebased maintanance and it is developed in Reactnative framework.


# Installation Procedure:

### Update the npm packages
```
npm update
```

### To install the packages Run the below command below
```
npm install
```

### To run in Android with enabled adb run the code below in Prompt Or bash
```
npx react-native run-android
```

### To run in Browser run the code below in Prompt Or bash
```
npx react-native run-web
```

### To run in IOS run the code below in Prompt Or bash
```
npx react-native run-ios
```


# MODULES:
- Workers(Organization) 
- Service man
- Admin

## Worker:
Worker is an employee who uses equipment like laptops, machines and equipment in the organisation.  When a worker spots an error or fault in equipment,then they can make a complaint using the app provided to them with credentials as category, email, Description, and id of an equipment using the QR code with the unique form id is generated automatically .Submit to the complaint portal. This application has a single screen with a form to place the complaint.

### This application contains the form embedded with an Fields below :
- Qr code reader- which reads the unique ID of an system/application
- Email id- this field fetches the email id of an employee who is raising the issue. 
- Category - this drop-down gives the facility to select the category of an issue like eg: OS,Hardware, Software needs, Sockets, Servers. 
- Description-this long text box provides the extra items to have the extra information of an issue. 
- Submit button On click the forms data is sent to a firebase under the tree of issues. 

## Service man:
Service man is a 2nd grade employee in a maintenance department under the admin of the Maintenance department. They have a job of doing service and resolving the jobs received from the worker. They make a mark of resolve by making an on click button.

### Service dashboard consists: 
- List of issues - Service labor can to the list of resource provided by the employe.
- Processing - This service man can take the current job and also can be search for the equipments I'd .

## Admin :
- Admin can do all the functions done in a maintenance department. The admin has the specialized datacenter with an graphical interface to see the work done, complaint received and work in processing. They can add the service man to the maintenance department to have any rights to access the app given to a service man. 
- Admin dashboard consist of all the tracking facilities like how many complaints have raised, how many are in processing and how many of them are resolved are represented using the pie chart and using the visual dashboard in multiplatform. Then the admin can also have an add user portal who can access the maintenance application of service man. 



