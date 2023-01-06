# Biodiversity in National Parks
![image](https://user-images.githubusercontent.com/111711194/208638154-de75742d-5ba5-4900-8729-89ba8bf1dff6.png)


### What is Biodiversity?

Biodiversity is the name we give to the variety of life on our planet, which is the result of billions of years of evolution. It includes all species of animals and plants, and the natural systems that support them. 
The US National Parks are home to a fascinating range of animals and plants, many of which are rare and protected.
However, biodiversity also refers to the ecosystems in our forests, wetlands, mountains, lakes, rivers and agricultural landscapes.
Millions of plant and animal species maintain these ecosystems, creating oxygen that we breathe, providing food for us to eat and ultimately ensuring a sustainable planet for future generations.
They are essential to human survival.

### Source:

National park locations and areas.
Plant and animal species in parks.

https://www.kaggle.com/datasets/nationalparkservice/park-biodiversity?select=parks.csv

We obtained our data from Biodiversity in National Parks | Kaggle
We selected these data files to learn more about the National Parks in the US, where they are located and the species that live within them. 
When researching the data, we learnt many things including loss of plant and animal species over time has always occurred, but the current pace of extinction is roughly 1,000 times higher than the natural rate.
Reasons for this include climate change, pollution, habitat destruction, over-exploitation of natural resources, introduction of invasive species and an increase in intensive agriculture.


### Technologies: 
Python 3, Flask, SQL, Bootstrap, HTML5, CSS,JavaScript, JSON, Leaflet.js

After downloading our data, we cleaned both files by removing any columns that did not provide us with any relevant information.
We also removed any rows that had missing data.
We then used SQL to housed our cleaned information within 2 tables.

We used HTML5 and CSS to create our 3 webpages; index.html, parks.html and species.html.

For our nav bar and drop down menu, we used Bootstrap and applied the same design to all 3 pages. This meant all 3 of our webpages can be accessed regardless of which page you were on.

Javascript and Leaflet were used to create our visualisations.


## Visualisations 

Check presentation for demo video.

### Home Page

![image](https://user-images.githubusercontent.com/109045338/210800806-13e0b421-f1e1-48f5-95dd-56f8fb6dac99.png)

On the home page, we have included an introduction into our topic and some facts and findings. 
There is a map which upon clicked will take you to our interactive map on the parks page. 
There is also 2 piecharts; one showing the 22 species that can be found in the majority of national parks and the other showing the states the parks are located in.

### Parks Page

![image](https://user-images.githubusercontent.com/109045338/210801856-73f2f591-408f-4f3a-81b5-d86ba5e9145e.png)
![image](https://user-images.githubusercontent.com/109045338/210801865-25255337-7a31-4199-a2ee-3e6363d0722c.png)

Here you will find an interactive map with all the US National Parks pinpointed. The size of the circles is proportionate to the size of the national parks.

When you hover over the park, it will come up with the park name alongside which state the park is in.

### Species Page

![image](https://user-images.githubusercontent.com/109045338/210806707-e521a176-66fb-4ef1-bdda-1ee6b16e68a6.png)

Here there is an interactive barchart which lists all the park names starting from the park with the most number of species and going down to the park with the least.

## Conclusions
There are 56 national park in USA  biggest national park is (Gates Of The Arctic National Park and Preserve) and  smallest national park is (Acadia National Park) ![image](https://user-images.githubusercontent.com/111711194/210850580-28c88b16-d787-43cd-b7de-1a7d2e5c42f8.png)
As we can see in the pie chart, the state of California(CA) has the highest biodiversity and in second Alaska(Ak) and third  Washington state. Dry Tortugas National Park has the lowest number of species and Great Smoky Mountains National Park has the highest species count. Falco peregrinus is the most common species;it is present in 56 parks. 

Biodiversity is very important to maintain life and it is our duty to conserve biodiversity as well as our environment. Long–term  maintenance of species and their management requires co-operative efforts across entire landscapes.

## Files Uploaded
- Various data cleaning jupyter notebooks used for cleaning and creating CSV's
- Images and videos under Resources
- Cleaned CSV files under Resources
- Static contains our CSS files (styles.css), a cleaned CSV, images and 2 Javascipt files (logic.js and park.js)
- The three templates for the webpages are stored under Templates (index.html, Parks.html and Species.html).
- Presentation
- app.py file


### Group members and contributions: 
Patricia Colomer:

Hibaa Aldubai: Project proposal, species page (interactive bar chart), nav bar, part of the home page, created the presentation, readme

Astha Nayak:

Abraham Ofolu:

Siyuan Liang:

Samanthi Jayaranthna:
