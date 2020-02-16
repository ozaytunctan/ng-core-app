# ng-core-app
Yemek tarifi projesi
----------------------------------------------------------------------
Proje basit olarak yemek tarifi projesidir.
- Yemek listesi,malzemeler ve alışveriş sepeti içeren basit bir angular projesidir.
- 

Proje Mimari 
-----------------------------------------------------------------------
- Orta Katman olarak core-lib
- web app project_name

Project Build
------------------------------------------------------------------------
1. Generate Library
    - ng new core-lib --create-application=false 
    - cd core-lib 
    - ng generate library core-lib 
2. Build Library 
   - ng build core-lib
   - cd dist
   - npm link core-lib --npm link vermek için kullanılır.
3. Using core-lib 
   - ng new project_name
   - cd project_name
   - npm link core-lib
