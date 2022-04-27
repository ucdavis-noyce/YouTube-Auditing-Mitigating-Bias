# YouTube, The Great Radicalizer? <br> Auditing and Mitigating Ideological Biases in YouTube Recommendations

## Abstract
Recommendations algorithms of social media platforms are often criticized for placing users in "rabbit holes" of (increasingly) ideologically biased content. Despite these concerns, prior evidence on this algorithmic radicalization is inconsistent. Furthermore, prior work lacks systematic interventions that reduce the potential ideological bias in recommendation algorithms. We conduct a systematic audit of YouTube's recommendation system using a hundred thousand sock puppets to determine the presence of ideological bias (i.e., are recommendations aligned with users' ideology), its magnitude (i.e., are users recommended an increasing number of videos aligned with their ideology), and radicalization (i.e., are the recommendations progressively more extreme). Furthermore, we design and evaluate a bottom-up intervention to minimize ideological bias in recommendations without relying on cooperation from YouTube. We find that YouTube's recommendations do direct users -- especially right-leaning users -- to ideologically biased and increasingly radical content on both homepages and in up-next recommendations. Our intervention effectively mitigates the observed bias, leading to more recommendations to ideologically neutral, diverse, and dissimilar content, yet debiasing is especially challenging for right-leaning users. Our systematic assessment shows that while YouTube recommendations lead to ideological bias, such bias can be mitigated through our intervention. 

## Authors

| <img src="/src/img/haroon.jpg" width="128" alt="Muhammad Haroon"> | <img src="/src/img/anshuman.jpg" width="128" alt="Anshuman Chhabra"> | <img src="/src/img/xin.jpg" width="128" alt="Xin Liu"> | <img src="/src/img/prasant.jpg" width="128" alt="Prasant Mohapatra"> | <img src="/src/img/zubair.jpg" width="128" alt="Zubair Shafiq"> | <img src="/src/img/magdalena.jpg" width="128" alt="Magdalena Wojcieszak"> |
| :--: | :--: | :--: | :--: | :--: | :--: |
|Muhammad Haroon | Anshuman Chhabra | Xin Liu | Prasant Mohapatra | Zubair Shafiq | Magdalena Wojcieszak |


## [Preprint](https://arxiv.org/abs/2203.10666)

## [Dataset](https://docs.google.com/forms/d/e/1FAIpQLSdsLGpK_p3OigqVODPkM7czYLtbj0oGgzBqx2PxOJNJCIWqjA/viewform?usp=sf_link)

## Recommendation Time Machine

### [Sock Puppet Explorer](#)
Explore the recommendations collected from our sock puppets.

### [Top Recommendations](#)
See the top recommendations for the left, center, and right sock puppets for each day.

## Source Code

### [YouTube Driver](https://github.com/ucdavis-noyce/YouTube-Driver)
Programmatically interact with YouTube's interface.

### [YouTube Sock Puppet](https://github.com/ucdavis-noyce/YouTube-Sock-Puppet)
Sock puppet implementation for collecting YouTube data.

### [YouTube Slant Estimation](https://github.com/ucdavis-noyce/YouTube-Slant-Estimation)
Estimate the ideological slant of a YouTube video using the Twitter API.

## Citation
```
@misc{https://doi.org/10.48550/arxiv.2203.10666,
  doi = {10.48550/ARXIV.2203.10666},
  url = {https://arxiv.org/abs/2203.10666},
  author = {Haroon, Muhammad and Chhabra, Anshuman and Liu, Xin and Mohapatra, Prasant and Shafiq, Zubair and Wojcieszak, Magdalena},
  keywords = {Computers and Society (cs.CY), FOS: Computer and information sciences, FOS: Computer and information sciences},
  title = {YouTube, The Great Radicalizer? Auditing and Mitigating Ideological Biases in YouTube Recommendations},
  publisher = {arXiv},
  year = {2022},
  copyright = {Creative Commons Attribution 4.0 International}
}
```
