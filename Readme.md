This is an incomplete assignment.

The app is built in Vue, and has integrations agains flight/weather APIs.
I've never used VUE before, and this slowed me down considerably, which is why this assignment is incomplete given the timebox of 4 hours.

The current idea is:

An employee is about to finish their vacay, and want to know which office they should go back to.

The initial screen got styled using Adyen fonts and colors, as well as an agolia autocomplete, as used on the actual website.
From there, our hypothetical user can select a point of origin.

On the next page, and this is not implemented yet, they would see alist of offices, and the cheapest flight in a 3 day range and current weather conditions in that city.

I've used VUE/TS/VueX, and am missing most of the frontend implementation for the ReturnToOffice view.

In a more "solid" setup, the API calls against external providers should live in a middleware accessed via REST/GraphQL to not expose API key secrets against third parties, as is currently occuring.

I look forward to having a discussion with your team.

Kind regards
