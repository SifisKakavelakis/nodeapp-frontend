import { Component } from '@angular/core';
import { IPerson } from '../../shared/interfaces/person';
import { Step3PersonTableInput } from '../step3-person-table-input/step3-person-table-input';

@Component({
  selector: 'app-step4-for-directive',
  imports: [Step3PersonTableInput],
  templateUrl: './step4-for-directive.html',
  styleUrl: './step4-for-directive.css',
})
export class Step4ForDirective {
  persons: IPerson[] = [
    {"firstname":"Kennedy","lastname":"Cuffley","email":"kcuffley0@wikimedia.org"},
    {"firstname":"Lauren","lastname":"MacAllan","email":"lmacallan1@photobucket.com"},
    {"firstname":"Neddy","lastname":"Billsberry","email":"nbillsberry2@skype.com"},
    {"firstname":"Nathanil","lastname":"Miners","email":"nminers3@slashdot.org"},
    {"firstname":"Cookie","lastname":"Kinrade","email":"ckinrade4@biglobe.ne.jp"},
    {"firstname":"Bran","lastname":"Wooderson","email":"bwooderson5@flavors.me"},
    {"firstname":"Brendon","lastname":"Keel","email":"bkeel6@multiply.com"},
    {"firstname":"Lucy","lastname":"Rusted","email":"lrusted7@pinterest.com"},
    {"firstname":"Klemens","lastname":"Travis","email":"ktravis8@mozilla.com"},
    {"firstname":"Lance","lastname":"Strangwood","email":"lstrangwood9@state.tx.us"},
    {"firstname":"Rosmunda","lastname":"Viegas","email":"rviegasa@ow.ly"},
    {"firstname":"Matty","lastname":"Schrinel","email":"mschrinelb@mit.edu"},
    {"firstname":"Kasey","lastname":"Kaines","email":"kkainesc@wikispaces.com"},
    {"firstname":"Raquela","lastname":"Dobbs","email":"rdobbsd@bluehost.com"},
    {"firstname":"Meris","lastname":"Berka","email":"mberkae@netvibes.com"},
    {"firstname":"Ivonne","lastname":"Gerren","email":"igerrenf@nih.gov"},
    {"firstname":"Petrina","lastname":"Davydochkin","email":"pdavydochking@economist.com"},
    {"firstname":"Ruddy","lastname":"Serrier","email":"rserrierh@jugem.jp"},
    {"firstname":"Jo ann","lastname":"Nudd","email":"jnuddi@jalbum.net"},
    {"firstname":"Ingrid","lastname":"De Roos","email":"ideroosj@last.fm"},
    {"firstname":"Edith","lastname":"Gilders","email":"egildersk@nytimes.com"},
    {"firstname":"Arri","lastname":"Sheeres","email":"asheeresl@gov.uk"},
    {"firstname":"Galina","lastname":"Tenbrug","email":"gtenbrugm@cnet.com"},
    {"firstname":"Antonietta","lastname":"McKenney","email":"amckenneyn@rediff.com"},
    {"firstname":"Rodd","lastname":"Kent","email":"rkento@bizjournals.com"},
    {"firstname":"Jorry","lastname":"Toohey","email":"jtooheyp@smh.com.au"},
    {"firstname":"Emilio","lastname":"Gudd","email":"eguddq@sohu.com"},
    {"firstname":"Yovonnda","lastname":"Tatham","email":"ytathamr@lulu.com"},
    {"firstname":"Osgood","lastname":"Templeman","email":"otemplemans@taobao.com"},
    {"firstname":"Dominik","lastname":"Lehrian","email":"dlehriant@t.co"}]
  
}
