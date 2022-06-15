/* eslint-disable no-irregular-whitespace */
// Content values can be changed freely, but don't change the data structure of this file.

const content = {
    header: {
        title: `Give IRMA a try`,
        homeLink: `https://amsterdam.nl/`,
        skipLink: {
            content: `Directly to content `,
            footer: ` Directly to footer`
        }
    },
    home: {
        breadcrumbs: `- [Home](/)`,
        title: `# Discover IRMA with the help of five demos`,
        intro: `IRMA is an app you can use to prove who you are when online. IRMA offers a new way of logging in, and is different to other familiar methods like DigiD. You will soon be able to use IRMA in Amsterdam.
Various demos are already available that you can use to find out how IRMA works. Use your own details to see the demos. The City of Amsterdam will not store this data.
        `,
        requirements: {
            title: `What do you need?`,
            body: `You can do the demo&apos;s with IRMA if you have installed the IRMA app on your phone and if you have added the following details to IRMA:
- Your personal data
- Your address
- Your e-mail address
- Your telephone number
## Installing IRMA
Download the IRMA app for iOS or Android:  \n
[![App Store](/assets/download-app-store.svg "Download IRMA from the App Store")](https://apps.apple.com/nl/app/irma-authenticatie/id1294092994)
[![Play Store](/assets/download-play-store.svg "Download IRMA from Play Store")](https://play.google.com/store/apps/details?id=org.irmacard.cardemu)

Would you like to know more about IRMA?
[Go to the IRMA website](https://irma.app/?lang=nl)`
        },
        subtitle: `## Getting started with IRMA`,
        demo1Card: {
            title: `Demo 1: Proving your age`,
            body: `Prove that you are at least 18 or 65, but without revealing your date of birth.`
        },
        demo2Card: {
            title: `Demo 2: Ideas for your neighbourhood`,
            body: `Prove with your postcode that you live in a particular district of Amsterdam and that you are at least 18 years of age.`
        },
        demo3Card: {
            title: `Demo 3: Log in`,
            body: `Log in with your name and e-mail address.`
        },
        demo4Card: {
            title: `Demo 4: Applying for a façade garden`,
            body: `Complete a form quickly using your details.`
        },
        demo5Card: {
            title: `Demo 5: Reporting anti-social behaviour`,
            body: `Report anti-social behaviour and keep informed about your report by disclosing your contact information.`
        },
        sidebar: {
            box: `Prove who you are with IRMA, simply and in a way that suits you
![IRMA Logo](/assets/irma_logo.svg "Read more about IRMA")
# Why IRMA?`,
            boxLink: `https://www.amsterdam.nl/inloggen-met-irma`,
            boxLabel: `Why IRMA?`
        }
    },
    demoNotification: {
        heading: `This is a demo site`,
        content: `You can find out here what you can do with the IRMA app. Your details will not be kept.`
    },
    downloadIrma: `Do you not yet have IRMA?  \n[Download IRMA](https://irma.app/?lang=nl)`,
    noSavePromise: `**The data you have just shared with IRMA will not be kept.**`,
    callToAction: `[Try the other demos](/)`,
    demoErrorAlert: {
        heading: `Nothing shared`,
        content: `You have not shared your details with the City of Amsterdam demo site.`
    },
    ieSupport: {
        breadcrumbs: `- [Home](/)`,
        content: `# Internet Explorer no longer supported
**This demo site does not work properly in Internet Explorer. You are advised to use a different browser. You are advised to change browser as quickly as possible, such as Firefox or Chrome.**
  &nbsp;
  
  &nbsp;
  
The **Give IRMA a try** website uses the most recent technology and web standards. The outdated Microsoft Internet Explorer browser is becoming less and less suitable. Supporting the browser is therefore an obstacle for the purpose of optimizing the functionality of the site.
In practical terms, the non-support of Internet Explorer means that the site would work much more slowly than in modern browsers, that pages would look different to how they have been designed, and that more complex functions (in the interactive map, for example) would not work properly.
If you are still using Internet Explorer, you are advised to change to a different browser, such as [Firefox](https://www.mozilla.org/nl/firefox/new/) or [Chrome](https://www.google.com/intl/nl_nl/chrome/). Microsoft itself [advises](https://docs.microsoft.com/nl-nl/lifecycle/faq/internet-explorer-microsoft-edge#what-is-the-lifecycle-policy-for-internet-explorer) the use of a different browser.`,
        errorAlert: {
            heading: `Please note`,
            content: `This demo site does not work properly in Internet Explorer. You are advised to use a different browser.
                
[What can I do?](/ie-support)`
        }
    },
    notFound: {
        title: `# Sorry, page not found`,
        content: `The page you are looking for no longer exists or has been moved. Fortunately, the IRMA demos are still here.`,
        link: `Take a look at [Give IRMA a try](/).`
    },
    demoEmptyVarsAlert: {
        heading: `Missing information`,
        content: `You have not provided all the information that is needed.  \n
The following information is missing: `
    },
    demo1: {
        breadcrumbs: `- [Home](/)
- [Demo 1: Proving your age](/leeftijd-aantonen)`,
        title: {
            noResult: `# Demo 1: Proving your age`,
            hasResult: `# Demo 1: Proving your age`
        },
        isOver18: {
            heading: `Your age`,
            content: `You have proved that you are at least 18 years of age.`
        },
        isNotOver18: {
            heading: `Your age`,
            content: `You are younger than 18.`
        },
        isOver65: {
            heading: `Your age`,
            content: `You have proved that you are at least 65 years of age.`
        },
        isNotOver65: {
            heading: `Your age`,
            content: `You are younger than 65.`
        },
        intro: `**You can use IRMA to prove your age without revealing your date of birth. You will therefore remain anonymous.**
# Give it a try
Prove you are at least 18 or 65 by using the following information to identify yourself:
- At least 18
- At least 65
      `,
        why: {
            title: 'Why is this information being requested?',
            body: '**At least 18, at least 65** The city council can grant you access to services based on your age.'
        },
        button18: `prove 18+ using IRMA`,
        button65: `prove 65+ using IRMA`,
        result: {
            title: `## What have you just done?`,
            isOver18: `- You have used IRMA to prove that you are at least 18.
- You have not provided your date of birth (or other information).`,
            isNotOver18: `- You have used IRMA to prove that you are younger than 18.
- You have not provided your date of birth (or other information).`,
            isOver65: `- You have used IRMA to prove that you are at least 65.
- You have not provided your date of birth (or other information).`,
            isNotOver65: `- You have used IRMA to prove that you are younger than 65.
- You have not provided your date of birth (or other information).`,
            whatsDifferentWithIrma: `## What is different about IRMA?  \nIf you provide your age via IRMA, the website knows whether you have reached the relevant age. You will remain anonymous.  \n  \nThis can be used for:
- Age-related access or discounts.
- Buying alcohol.
- Voting for local initiatives.
`
        },
        showQrOnMobile: {
            link18: `Show QR code to prove 18+`,
            link65: `Show QR code to prove 65+`
        }
    },

    demo2: {
        breadcrumbs: `- [Home](/)
- [Demo 2: Ideas for your neighbourhood](/ideeen-voor-uw-buurt)`,
        intro: `**With IRMA, you can prove which district you live in, and therefore contribute your input for ideas for your neighbourhood without revealing your home address and date of birth. You will therefore remain anonymous.**
# Give it a try
Prove which district you live in and that you are at least 18 years of age by identifying yourself with the following information:
- Postcode
- At least 18`,
        unproven: {
            title: `# Demo 2: Ideas for your neighbourhood`
        },
        proven: {
            title: `# Demo 2: Ideas for your neighbourhood`,
            alert: {
                title: `Your postcode and age`,
                // [] will be replaced by the wijken
                bodyAgeNegative: `You have proved that you live in [] and that you are younger than 18. You are not yet allowed to contribute input for ideas for your neighbourhood.`,
                bodyPostcodeNegative: `You have proved that you do not live in Amsterdam and that you are at least 18. You are not entitled to contribute input for ideas for any neighbourhood in Amsterdam.`,
                // [] will be replaced by the wijken
                bodyAgeAndPostcodePositive: `You have proved that you live in [] and that you are at least 18. You are entitled to contribute input for ideas for your neighbourhood.`,
                bodyAgeAndPostcodeNegative: `You have proved that you do not live in Amsterdam and that you are younger than 18. You are not entitled to contribute input for ideas for any neighbourhood in Amsterdam.`
            }
        },
        why: {
            title: `Why is this information being requested?`,
            body: `**Your postcode**  \nThe city council then knows which district you live in.\n
**At least 18**  \nThe city council then knows whether you may vote.`
        },
        button: `Prove with IRMA`,
        result: `## What have you just done?
- You have used IRMA to state what district you live in.
- You have used IRMA to state whether you are at least 18.
- You have not shared personal information, such as your name, address, or date of birth.
## What is different about IRMA?
If you provide your postcode and age via IRMA, it is known whereabouts you live and that you have reached the relevant age. You will remain anonymous.
This can be used for:
- Voting for local initiatives.
- Age-related access or discounts in your neighbourhood.
- Amenities specially for Amsterdam residents.`
    },

    demo3: {
        breadcrumbs: `- [Home](/)
- [Demo 3: Log in](/inloggen)`,
        unproven: {
            title: `# Demo 3: Log in`,
            alert: {
                title: `Your name and e-mail address`,
                body: `You can find out here what you can do with the IRMA app. Your details will not be kept.`
            },
            intro: `**Use IRMA to log into websites without first creating a username and password.**
## Give it a try
Log in with the city council by using the following information to identify yourself:
- Your full name
- Your e-mail address`,
            why: {
                title: `Why is this information being requested?`,
                body: `**Your full name**  \nThe city council would like to address you by your name.\n
**Your e-mail address**  \nIn the case of services for which the city council may not ask you for your BSN (citizen service number), you may be asked for your e-mail address to log in.`
            }
        },
        proven: {
            title: `# Demo 3: Your name and e-mail address`,
            alert: {
                title: `Your name and e-mail address`,
                body: `You have proven that you are [] and that you have access to e-mails that are sent to [].`
            }
        },
        button: `Logging in with IRMA`,
        result: `## What have you just done?
- You have used IRMA to log in.
- You have provided your e-mail address and your name via IRMA to the demo site.
## What is different about IRMA?
Logging in with IRMA is different to what you are currently used to on websites. You do not have to create a profile or share all kinds of personal information.
You do not have to create a profile or share all kinds of personal information.
- Using your e-mail address, the city council can show the details of your application or notification.
- If you share your e-mail address via IRMA, the city council can send you updates about the status of your application or notification.`
    },

    demo4: {
        breadcrumbs: `- [Home](/)
- [Demo 4: Applying for a façade garden](/geveltuin-aanvragen)`,
        unproven: {
            title: `# Demo 4: Applying for a façade garden`,
            alert: {
                title: `This is a demo`,
                body: `Your demo application will not be sent to the city council.`
            },
            intro1: `**Using IRMA, you can make an application and use information in the application that is contained in your IRMA app.**\n
**The amount of information you need to provide is reduced and the city council can be certain that it is you making the application and that the details are correct.**
## Give it a try
Do a demo application by using the following information to identify yourself:
- Full name
- Street
- House number
- Postcode
- Town/City:
- Mobile phone number
- E-mail address
`,
            why: {
                title: `Why is this information being requested?`,
                body: `**Full name**  \nThe city council would like to address you by your name.\n
**Home address**  \nThe city council needs your street, house number, and town/city in order to know which location your application relates to.\n
**Mobile phone number**  \nThe city council would like to be able to contact you if there are any questions about your application.\n
**E-mail address**  \nThe city council would like to send you an e-mail confirming your application.\n
`
            },
            intro2: `
## Using IRMA to add details
Use IRMA to add details to your demo application
`
        },
        proven: {
            title: `# Demo 4: Applying for a façade garden`,
            alert: {
                title: `Your personal and contact details`,
                body: `You have completed a form with your name, address, and contact details.`
            }
        },
        form: {
            owner: 'Are you the owner of the property where the façade garden will be?',
            required:
                'Do not forget to state whether you are the owner of the property where the façade garden will be',
            optionYes: 'Yes',
            optionNo: 'No'
        },
        button: 'Using IRMA to add details',
        result: {
            intro: `**The data you have just shared with IRMA will not be kept.\nThis is a demo; you have not actually started an application for a façade garden.**
You can find all the details of your demo application below:`,
            yourDemoRequest: `### Your demo application
Your choice  \n
:   façade garden  \n
Are you the owner of the property where the façade garden will be?  \n
:   [owner]
`,
            yourDetails: `### Your details\n
Name  \n
:   [name]  \n
Street and house number  \n
:   [street] [houseNumber]\n
Postcode and town/city  \n
:   [zipcode], [city]\n
Telephone number  \n
:   [telephone]  \n
E-mail  \n
:   [email]  \n
`,
            rest: `## What have you just done?
- You have used IRMA to fill in a form with your details.
- You have filled in a form with data from official sources. The city council knows that this information is correct and is able to process applications of this kind more quickly.
## What is different about IRMA?
If you use IRMA to complete a form, it is impossible to make any mistakes so you can be certain that the information is correct.
This can be used for:
- Applications you make using the City of Amsterdam website.
- Forms on other websites.
`
        }
    },

    demo5: {
        breadcrumbs: `- [Home](/)
- [Demo 5: Reporting anti-social behaviour](/overlast-melden)`,
        unproven: {
            title: `# Demo 5: Reporting anti-social behaviour`,
            intro1: `**With IRMA, you can report anti-social behaviour using the mobile number on which you can be reached for questions and the e-mail address at which you wish to receive status updates.**\n
**You use information stored in your IRMA app. The city council can then contact you and keep you informed.**
## Give it a try
Make a demo report by using the following information to identify yourself:
- E-mail address
- Mobile phone number
`,
            why: {
                title: `Why is this information being requested?`,
                body: `**Mobile phone number**  \nThe city council can then ask you any questions it may have about what you have reported.\n
**E-mail address**  \nThe city council can keep you up to date about what you have reported. And you can also use this e-mail address to monitor progress in Mijn Amsterdam.\n
`
            },
            alert: {
                title: `This is a demo`,
                body: `Your demo notification will not be sent to the city council.`
            },
            callToAction: `## Using IRMA to add details
Add your e-mail address and/or telephone number to your demo application from IRMA.`,
            callToActionNoIRMA: `## Reporting anonymously
Make your report using IRMA, but without revealing your e-mail address or telephone number.`
        },
        proven: {
            title: `# Demo 5: Reporting anti-social behaviour`,
            alertPhoneEmail: {
                title: `Your contact details`,
                body: `You have added your telephone number and e-mail address to a form.`
            },
            alertEmail: {
                title: `Your contact details`,
                body: `You have added your e-mail address to a form.`
            },
            alertPhone: {
                title: `Your contact details`,
                body: `You have added your telephone number to a form.`
            },
            alertNone: {
                title: `No contact details`,
                body: `You have chosen not to share any contact details.`
            }
        },
        form: {
            title: `# Demo report of anti-social behaviour`,
            location: {
                label: `### Where is it?
Type in the closest address or click on the location on the map.`,
                mapLabel: 'Map',
                locationInputLabel: 'Location',
                required: `Do not forget to select a location.`
            },
            report: {
                label: `### What does it concern?
Do not type in any personal details in this description; this information will be asked separately.`,
                ariaLabel: `Description of the report`,
                required: 'Do not forget to describe what you are reporting.'
            },
            optionPhone: {
                label: `May we call you if we have any questions?`,
                remark: `This would help us resolve the problem more quickly or more effectively.`,
                optionYes: 'Yes',
                optionNo: 'No',
                required: 'Do not forget to state whether we can call you if we have any questions'
            },
            optionEmail: {
                label: `Would you like to be kept up to date on the progress we are making?`,
                remark: `We will send an e-mail to explain what we are doing with your report and when it will be dealt with.`,
                optionYes: 'Yes',
                optionNo: 'No',
                required: 'Do not forget to state whether you wish to be kept up to date on the progress we are making'
            }
        },
        button: 'Using IRMA to add details',
        buttonNoIRMA: 'Making a demo report',
        result: {
            intro: `**The data you have just shared with IRMA will not be kept or sent to anyone. \nThis is a demo; you have not actually reported any anti-social behaviour.**
You can find all the details of your demo report below:`,
            yourReportBeforeMap: `### Your demo report of anti-social behaviour\n
Location  \n
:   [location]  \n`,
            yourReportAfterMap: `
Description  \n
:   [report]  \n`,
            yourMobileNumber: `
Your telephone number  \n
:   [mobilenumber]  \n`,
            yourEmail: `
Your e-mail address  \n
:   [email]  \n`,
            rest: `## What have you just done?
- You have used IRMA to share your telephone number and/or e-mail address.
- You have made a report with your details from official sources.\n The city council knows that this information is correct and is able to process forms of this kind more quickly. \n
## What is different about IRMA?
If you use IRMA to report anti-social behaviour, it is impossible to make any mistakes so you can be certain that the information is correct.\n
This can be used for:
- Reporting something using the City of Amsterdam website.
- Giving you access so you can monitor the progress of your report on Mijn Amsterdam.`,
            restNoIRMA: `## What have you just done?
- You have not used any details from IRMA.`,
            disclaimerError: `This is a demo; you have not actually reported any anti-social behaviour.`
        }
    },

    showQrOnMobile: {
        label: `Do you have IRMA on another device?`,
        link: `Show QR code`
    },

    cookies: {
        breadcrumbs: `- [Home](/)
- [Cookies](/cookies)`,
        intro: `# Cookies on this site and privacy
**A cookie is a small file that is sent with pages on this website and stored on your computer by your browser. We use cookies to enable the website to function properly and to help us monitor how the website is used.**`,
        explanation: {
            title: `How do cookies work?`,
            body: `There are three types of cookie.
### Functional cookies
These cookies are needed to allow the website to function and to store settings and preferences during each visit to the website. Examples include language settings or completed fields on a form.
### Analytic cookies
These cookies show how you use the website. This tells us which parts of the website you are interested in and which not, whether the website is working properly, and how we can improve the website.
### Third-party website cookies
Some parts of the website contain links to third-party websites. This involves useful little extras, such as a Google map with an interactive route description, a Facebook ‘like’ button, or the option to Retweet something. Thanks to these cookies, the website you are visiting ‘knows’ if you are logged into Google, Facebook, or Twitter.
        `
        },
        list: `
Below is a summary of the cookies used with this website.
### SiteImprove
The 'AWSELB / AWSELBCOR' and 'nmstat' cookies are placed by SiteImprove. We use these statistical services to see which pages are visited. The data in the cookies are anonymized and cannot therefore be traced to a particular person.
### Font licences
A number of cookies are used to check the use of fonts and their associated licences.
### Campaign ID for feedback form
We store a campaign ID in localStorage for the feedback form.
This means we can ask you once for feedback, after going through a demo.
`,
        delete: {
            title: `Delete cookies`,
            body: `You can delete cookies using your browser settings. You can also use your browser settings to exclude cookies completely, or partly. You can find more information about cookies and how to deactivate them at [veiliginternetten.nl](https://www.veiliginternetten.nl). For professionals: [National Cyber Security Centre](https://www.ncsc.nl/).`
        },
        outro: `[Back to the homepage](/)`
    },

    a11y: {
        breadcrumbs: `- [Home](/)
- [Accessibility statement](/toegankelijkheidsverklaring)`,
        intro: `# Complete accessibility statement
**The City of Amsterdam would like everyone to be able to use the ‘Give IRMA a try’ website.**`,
        article: `
## Accessible ‘Give IRMA a try’
Everyone should be able to use local and central government websites. This is what we are aiming to achieve, by making ‘Give IRMA a try’ accessible to everyone, and keeping it that way:
- We are developing ‘Give IRMA a try’ in partnership with you, the people of Amsterdam.
- We regularly carry out user surveys and test the accessibility of ‘Give IRMA a try’.
- We resolve any problem areas.
- Our employees keep their knowledge about accessibility up to date.
## Areas that are not yet accessible
- If style sheets are deactivated, the IRMA QR code appears at the bottom of the page. In that case, the QR code can only get focus using the keyboard.
- In the Usabilla feedback panel, no tooltips are displayed with any of the five rating stars.
- In the Usabilla feedback panel, the ‘Powered by GetFeedback’ text is lacking a 'UK’ language attribute.
- In the Usabilla feedback panel, ‘Reporting something specific’ is not clearly recognizable for a screen reader.\n
Have you found a page that you cannot read or use? Please let us know, using our [contact form](https://formulieren.amsterdam.nl/TripleForms/DirectRegelen/formulier/nl-NL/evAmsterdam/Klachtenformulier.aspx).
## What can you expect from us?
- You will receive confirmation of receipt within five working days.
- We will inform you about our progress and the outcome.
- Your request will be dealt with within three weeks.\n
## Enforcement procedure
Are you dissatisfied about how your question or complaint has been dealt with? Or have we not responded on time?
If so, you can get in touch using the [National ombudsman complaints form](https://www.nationaleombudsman.nl/klacht-indienen/uw-klacht).
## Accessibility statement
The ‘Give IRMA a try’ website is in partial compliance with the Decree on Digital Accessibility of the Government.
The accessibility statement is available in the [Register van toegankelijkheidsverklaringen (register of accessibility statements)](https://www.toegankelijkheidsverklaring.nl/register/4096).
This statement is based on the [‘Give IRMA a try’ accessibility check](/assets/toegankelijkheidscheck_website_Probeer_IRMA_uit.pdf). This check includes all WCAG 2.1 success criteria on which this website has been tested.  
`
    },

    responsiveImages: {
        home: { src: 'home', alt: 'User opens QR code scanner on phone.' },
        demo1: {
            header: { src: 'leeftijd', alt: 'Street scene; a terrace' },
            isOver18: { src: 'ouder-dan-18', alt: 'Photo of people in a bar' },
            isNotOver18: {
                src: 'jonger-dan-18',
                alt: 'Photo of a square with children'
            },
            isOver65: {
                src: 'ouder-dan-65',
                alt: 'Photo of senior citizens dancing'
            },
            isNotOver65: {
                src: 'jonger-dan-65',
                alt: 'Street scene; adults cycling'
            }
        },
        demo2: {
            header: { src: 'ideeen-voor-buurt', alt: 'Street with girls singing' },
            headerWithWijk: { src: '', alt: 'Photo from []' },
            headerWithAmsterdam: {
                src: 'amsterdam-algemeen',
                alt: 'Photo of Central Station'
            },
            postcodeNegative: {
                src: 'niet-amsterdammer-18plus',
                alt: 'Photo of relocation to Amsterdam'
            },
            ageAndPostcodeNegative: {
                src: 'niet-amsterdammer-18min',
                alt: 'Photo of children looking at a house in Amsterdam'
            }
        },
        demo3: {
            header: {
                src: 'inloggen',
                alt: 'User opens images of Amsterdam on tablet'
            },
            headerResult: {
                src: 'inloggen',
                alt: 'User opens images of Amsterdam on tablet'
            }
        },
        demo4: {
            header: { src: 'geveltuin', alt: 'Photo of façade garden in street' },
            headerResult: {
                src: 'geveltuin-overzicht',
                alt: 'Photo of façade garden in street'
            }
        },
        demo5: {
            header: {
                src: 'overlast-melden-straatafval',
                alt: 'Photo of street litter'
            },
            headerResult: {
                src: 'overlast-melden-bloembakken',
                alt: 'Photo of underground waste containers'
            }
        }
    },

    footer: {
        column1: `# Contact
Do you have a question to which you cannot find the answer on this website? Then please get in touch.
- [Contact form](https://formulieren.amsterdam.nl/tripleforms/DirectRegelen/formulier/nl-NL/evAmsterdam/Klachtenformulier.aspx)
- [Call phone number 14 020](tel:14020)  \n> Monday to Friday, from 08.00 to 18.00
- [Contact details and opening hours](https://www.amsterdam.nl/contact/)`,
        column2: `# Follow the City of Amsterdam
- [Newsletter amsterdam.nl](https://action.spike.email/104050/Subscribe/9f53558f-601d-4db8-97d6-a78bccd6e39d?culture=nl-NL)
- [Twitter](https://twitter.com/AmsterdamNL)
- [Facebook](https://www.facebook.com/gemeenteamsterdam)
- [Instagram](https://www.instagram.com/gemeenteamsterdam/)
- [LinkedIn](https://www.linkedin.com/company/gemeente-amsterdam)
- [Werkenbij](https://www.amsterdam.nl/bestuur-organisatie/werkenbij/)`,
        column3: `# What is there to do in Amsterdam?
Information about tourism, culture, nightlife, events, and more can be found at [I amsterdam](https://www.iamsterdam.com/nl)`,
        bottom: `[About this site](https://www.amsterdam.nl/overdezesite/)
[Privacy](https://www.amsterdam.nl/privacy/)
[Accessibility](/toegankelijkheidsverklaring)
[Cookies on this site](/cookies)`
    },

    qrcode: {
        title: '### Identify yourself',
        steps: `Follow these steps: \n
1. Scan the QR code below with your IRMA app.  \n
2. In your IRMA app, select whether you would like to share the requested details.`,
        button: `Logging in with IRMA`,
        close: 'Close',
        counter: 'This QR code is valid for [].',
        minute: 'minute',
        minutePlural: 'minutes',
        second: 'second',
        secondPlural: 'seconds'
    },
    translatedIrmaAttributes: {
        name: 'name',
        fullname: 'full name',
        street: 'street',
        housenumber: 'house number',
        city: 'city/town',
        zipcode: 'postcode',
        email: 'e-mail',
        telephone: 'mobile telephone number',
        over18: 'at least 18'
    }
};

export default content;
