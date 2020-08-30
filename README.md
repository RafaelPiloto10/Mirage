## Inspiration

With the recent increase in temperature due to global warming and heat waves, summers have become more dangerous than we care to admit. In fact, one of our team members has had multiple personal accounts of heat strokes within the family. Although going out is not the safest option during COVID-19 times, it can certainly get a little hotter than normal with global temperatures increasing and extra layers of clothing to prevent COVID-19. According to a recent article by The Washington Post, [high temperatures claim about 702 lives each year in the United States](https://www.washingtonpost.com/health/high-temperatures-result-in-about-702-deaths-in-the-us-each-year/2020/06/26/8a5f0064-b6f5-11ea-a510-55bf26485c93_story.html). A service as simple as ours could save hundreds of lives each year.

## What it does

Mirage is an iOS shortcut that interfaces best with the Apple Watch to monitor your heart rate and alert you when your predicted core temperature is at risk for heat stroke.

## How we built it

Mirage uses the heart rate data provided by Apple's Health app, which can by synced with the Apple Watch or logged manually. After researching the best way to predict the body's core temperature at the with little user input, we ultimately decided to use the [correlation found between heart rate and core body temperature](https://iopscience.iop.org/article/10.1088/0967-3334/34/7/781/pdf). Using this information, we were able to develop an iOS Shortcut that is able to use the Health App for the heart rate data. Furthermore, users with an Apple Watch can have the heart rate data updated automatically and only need to run the shortcut periodically to ensure their safety.

## Challenges we ran into

One of the largest challenges we ran into was being able to model the variance within different heart conditions amongst the general population. To do this, we had to create a normal distribution with a standard deviation coefficient described in our [research](https://iopscience.iop.org/article/10.1088/0967-3334/34/7/781/pdf). Unfortunately, iOS Shortcuts doesn't have a feature available to randomly choose a number from a normal distribution. In order to resolve this issue, we had to implement a [Box-Muller Transform](https://en.wikipedia.org/wiki/Box%E2%80%93Muller_transform), which ultimately converted the uniform distribution provided by iOS Shortcuts and turned it into the normal distribution we needed.

## Accomplishments that we're proud of

Ultimately, we are proud to have taken a real world issue that so many people face, and in some cases lose their life to, and provided a potential solution to reducing the risk when it comes to enjoying the summer heat. With just a click away, we hope that users are able to use our shortcut to ensure their safety 

## What we learned

We learned a lot about web-development and iOS Shortcuts. More importantly, we learned a lot about the dangers of high heat temperatures, heat strokes, and their detrimental effects on a person's life. 

## What's next for M.I.R.A.G.E.

M.I.R.A.G.E hopes to expand its platform, scalability, and reliability with apps on iOS and Android. In addition, we'd like to expand our mission towards having this become a standard feature in wearable technology such as watches. We plan to continue spreading awareness of the effects prolonged heat temperatures can have on the human body, the dangers of heat strokes, and how more prevalent they are becoming. 

