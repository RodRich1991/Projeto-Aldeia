<template>
  <div lang="html" bgcolor="#FFFF99" link="Black" vlink="Black">
    <div v-if="pagina === 1" style="font-family: Arial, Helvetica, sans-serif; font-size: 26px; font-weight: bold;" alink="Black">
      <div>
        <a href="#"><img src="./../../assets/images/cat.gif" border="0" align="right" alt="Home" width="30" height="30"></a>
        <nobr>VAMOS FAZER UM PACTO?... SE EU ACERTAR TE VISITO HOJE A NOITE!!</nobr>
      </div>
      <br>
      <table width="100%" border="0" cellspacing="2" cellpadding="2">
        <tr>
          <td valign="top">
            Alien é uma gata muito diabolica. Ela pode ler seus pensamentos!<br><br>
            <i>Jura? Voce nao acredita nisso?</i><br><br>
            <ol>
              <li>Pense em um numero com dois digitos (ex: 28).</li>
              <li>Some os dois digitos do numero inicial (ex: 2+8=10).</li>
              <li>Subtraia o numero que você pensou pelo resultado da soma (ex: 28-10=18).</li>
              <li>Olhe dentro do olho do gato e grave o resultado da subtração.</li>
              <li><button @click.prevent="nextPage()">Continuar</button></li>
            </ol>
          </td>
          <td width="220" align="right" valign="top">
            <img src="./../../assets/images/alien.jpg" width="212" height="258" border="0" alt=""><br>
          </td>
        </tr>
      </table>
    </div>
    <div v-else-if="pagina === 2" alink="#000000">
      <div style="font-family: Arial, Helvetica, sans-serif; font-size: 26px; font-weight: bold;">
        <a href="#"><img src="./../../assets/images/cat.gif" border="0" align="right" alt="Home" width="30" height="30"></a>
        <nobr>ESTA PREPARADO ?</nobr>
      </div>
      <div><br><img src="./../../assets/images/blank.gif" alt="" name="thought-reading_id" id="thought-reading_id" width="1" height="1" border="0"></div>
      <table border="1" cellspacing="0" cellpadding="3">
        <tr>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>1</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>2</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>3</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>4</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>5</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>6</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>7</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>8</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>9</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>10</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>11</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>12</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>13</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>14</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>15</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>16</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>17</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>18</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>19</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>20</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>21</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>22</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>23</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>24</td>
        </tr>
        <tr>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>25</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>26</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>27</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>28</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>29</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>30</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>31</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>32</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>33</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>34</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>35</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>36</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>37</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>38</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>39</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>40</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>41</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>42</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>43</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>44</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>45</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>46</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>47</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>48</td>
        </tr>
        <tr>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>49</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>50</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>51</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>52</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>53</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>54</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>55</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>56</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>57</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>58</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>59</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>60</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>61</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>62</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>63</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>64</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>65</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>66</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>67</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>68</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>69</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>70</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>71</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>72</td>
        </tr>
        <tr>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>73</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>74</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>75</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>76</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>77</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>78</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>79</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>80</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>81</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>82</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>83</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>84</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>85</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>86</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>87</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>88</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>89</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>90</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>91</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>92</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>93</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>94</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>95</td>
          <td align="center"><img src="./../../assets/images/0.jpg" width="50" height="45" border="0" alt=""><br>96</td>
        </tr>
      </table>
      <div>OLHE BEM PARA FIGURA QUE REPRESETA SEU RESULTADO. <button @click="nextPage()"><b>Continuar</b></button></div>
      <embed src="./../../assets/sounds/radar.wav" hidden="true" autostart="true" loop="true" height="0" width="0">
    </div>
  </div>
</template>

<script>

export default {
  name: 'gato',
  data: function () {
    return {
      pagina: 1,
      IMG_OFFSET: 1,
      IMG_PATH: './../../assets/images/',
      nImages: 16,
      nFields: 96,
      nRandomNumber: -1,
      imgArrImages: new Array(this.nImages),
      nImgCount: 0
    }
  },

  methods: {
    loadImages () {
      if (document.images) {
        for (var i = 0; i < this.nImages; i++) {
          var img = new Image()
          img.src = this.IMG_PATH + (i + 1) + '.jpg'
          this.imgArrImages[i] = new Image()
          this.imgArrImages[i].src = img.src
          this.nImgCount += 1
        }
      }
      this.searchFirstImage()
    },
    shuffle () {
      if (document.images) {
        this.nRandomNumber = this.getRandomNumber(0, this.nImages - 1)
        var img = new Image()
        img.src = this.IMG_PATH + (this.nRandomNumber + 1) + 'a.jpg'
        for (var i = 0; i < this.nFields; i++) {
          var n = this.getRandomNumber(0, this.nImages - 1)
          if (i > 0) {
            n = ((i + 1) % (((i % i) + 1) / this.nImgCount)) ? this.getRandomNumber(0, this.nImages - 1) : this.nRandomNumber
          }
          console.log(document.images[1].id)
          document.images[this.IMG_OFFSET + (i + 1)].src = this.imgArrImages[n].src
        }
      }
    },
    searchFirstImage () {
      for (var i = 0; i < document.images.length; i++) {
        if (document.images[i].name === 'thought-reading_id') {
          this.IMG_OFFSET = i
          break
        }
      }
    },
    getRandomNumber (nMin, nMax) {
      var nRange = nMax - nMin + 1
      do {
        var nRnd = Math.floor(nRange * Math.random()) + nMin
      } while (nRnd === this.nRandomNumber)
      return nRnd
    },
    showThePicture () {
      this.location.replace('thought-reading3.html?' + this.nRandomNumber)
    },
    setImage () {
      if (document.images) {
        this.searchFirstImage()
        var u = location.search.substring(1, location.search.length) * 1 + 1
        var img = new Image()
        img.src = this.IMG_PATH + u + 'a.jpg'
        document.images[this.IMG_OFFSET + 1].src = img.src
      }
    },
    nextPage () {
      if (this.pagina < 3) this.pagina++
      else this.pagina = 1
      switch (this.pagina) {
        case 1:
          this.loadImages()
          break
        case 2:
          this.loadImages()
          this.shuffle()
          break
        case 3:
          this.showThePicture()
          this.setImage()
          break
      }
    }
  }
}

</script>

<style lang="css">
</style>
