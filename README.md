# Javascript ile Binary Search

1. Random dizi merge sort ile sıralandı

********************************

2. Sıralı dizi binary  search fonksiyonuna verilerek sonuç bulundu

* Dizinin orta noktası belirlenir
* Aranan sayı ortadaki sayıdan büyük ise sağ, küçük ise sol tarafta kalan dizi ile arama işlemi tekrar edilir
* Dizi uzunluğu 1 olana kadar işleme devam edilir
  
## Örnek (3 sayısının [7, 5, 1, 8, 3, 6, 0, 9, 4, 2] içerisinde aranması)

* [7, 5, 1, 8, 3, 6, 0, 9, 4, 2] dizisi sıralı hale getirilir -> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
* Ardından orta nokta 4(root) olarak belirlenir ve aranan sayı 4'ten küçük olduğu için sol taraftan işleme devam edilir.
* Yeni Dizi  [0, 1, 2, 3, 4] , ve yeni orta nokta 2 olarak belirlenir
* Aranan sayı 2' den büyük olduğu için aramaya sağ taraftan devam edilir.
* Yeni Dizi [2, 3, 4] ve yeni orta nokta 3 olarak belirlenir
* Aranan sayı tam orta nokta olduğu için aramaya son verilir.
