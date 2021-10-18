FROM node:14.17

RUN mkdir -p /usr/src/carInsurance-tdd
WORKDIR /usr/src/carInsurance-tdd

COPY ./package.json /usr/src/carInsurance-tdd/
RUN yarn install
COPY ./ /usr/src/carInsurance-tdd

RUN yarn test

CMD  yarn start

