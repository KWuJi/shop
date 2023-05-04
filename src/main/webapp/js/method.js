//****************��ʹ�õ�������city.js******************//

/*����id��ȡ����*/
function $(str) {
    return document.getElementById(str);
}

var addrShow = $('addr-show');
var addrpro = $('addr-pro');
var addrcity = $('addr-city');
var addrdis = $('addr-dis');

//var btn = document.getElementsByClassName('met1')[0];
var prov = $('prov');
var city = $('city');
var country = $('country');


/*���ڱ��浱ǰ��ѡ��ʡ����*/
var current = {
    prov: '',
    city: '',
    country: ''
};

/*����ʡ���б�*/
function showProv() {
    //btn.disabled = true;
    var len = provice.length;
    for (var i = 0; i < len; i++) {
        var provOpt = document.createElement('option');
        provOpt.innerText = provice[i]['name'];
        provOpt.value = i;
        prov.appendChild(provOpt);
        console.log(provOpt.innerText);
        console.log(provOpt.value);
    }
}
/*������ѡ��ʡ������ʾ�����б�*/
function showCity(obj) {
    var val = obj.options[obj.selectedIndex].value;
    if (val != current.prov) {
        current.prov = val;
    }
    if (val != null) {
        city.length = 1;
        var cityLen = provice[val]["city"].length;
        for (var j = 0; j < cityLen; j++) {
            var cityOpt = document.createElement('option');
            cityOpt.innerText = provice[val]["city"][j].name;
            cityOpt.value = j;
            city.appendChild(cityOpt);
        }
    }
}
/*������ѡ�ĳ�������ʾ�����б�*/
function showCountry(obj) {
    var val = obj.options[obj.selectedIndex].value;
    current.city = val;
    if (val != null) {
        country.length = 1; //���֮ǰ������ֻ����һ��Ĭ��ѡ��
        var countryLen = provice[current.prov]["city"][val].districtAndCounty.length;
        if (countryLen == 0) {
            addrShow.value = provice[current.prov].name + '-' + provice[current.prov]["city"][current.city].name;
            return;
        }
        for (var n = 0; n < countryLen; n++) {
            var countryOpt = document.createElement('option');
            countryOpt.innerText = provice[current.prov]["city"][val].districtAndCounty[n];
            countryOpt.value = n;
            country.appendChild(countryOpt);
        }
    }
}

/*ѡ������֮��Ĵ�����*/
function selecCountry(obj) {
    current.country = obj.options[obj.selectedIndex].value;
    if ((current.city != null) && (current.country != null)) {
        //btn.disabled = false;
    }
}

/*���ȷ����ť��ʾ�û���ѡ�ĵ�ַ*/
function showAddr() {
   /* addrShow.value = provice[current.prov].name + '-' + provice[current.prov]["city"][current.city].name + '-' + provice[current.prov]["city"][current.city].districtAndCounty[current.country];
    */addrpro.value = provice[current.prov].name;
    addrcity.value =provice[current.prov]["city"][current.city].name;
    addrdis.value =provice[current.prov]["city"][current.city].districtAndCounty[current.country];
}






/*
//!****************��Եڶ��ַ�ʽ�ľ���jsʵ�ֲ���******************!//
//!****************��ʹ�õ�������city.js******************!//

/!*����id��ȡ����*!/
function $(str) {
    return document.getElementById(str);
}

var addrShow02 = $('addr-show02');  //���յ�ַ��ʾ��
var titleWrap = $('title-wrap').getElementsByTagName('LI');
var addrWrap = $('addr-wrap');   //ʡ������ʾģ��
var btn2 = document.getElementsByClassName('met2')[0];  //ȷ����ť

var current2 = {
    prov: '',
    city: '',
    country: '',
    provVal: '',
    cityVal: '',
    countryVal: ''
};

/!*�Զ�����ʡ���б�*!/
window.onload = showProv2();

function showProv2() {
    addrWrap.innerHTML = '';
    /!*addrShow02.value = '';*!/
    btn2.disabled = true;
    titleWrap[0].className = 'titleSel';
    var len = provice.length;
    for (var i = 0; i < len; i++) {
        var provLi = document.createElement('li');
        provLi.innerText = provice[i]['name'];
        provLi.index = i;
        addrWrap.appendChild(provLi);
    }
}

/!*************************��Ҫ����̬���ɵ�li�󶨵���¼�********************** *!/
addrWrap.onclick = function (e) {
    var n;
    var e = e || window.event;
    var target = e.target || e.srcElement;
    if (target && target.nodeName == 'LI') {
        /!*���жϵ�ǰ��ʾ������ʾ����ʡ�������ǲ���*!/
        for (var z = 0; z < 3; z++) {
            if (titleWrap[z].className == 'titleSel')
                n = z;
        }
        /!*��ʾ�Ĵ�����*!/
        switch (n) {
            case 0:
                showCity2(target.index);
                break;
            case 1:
                showCountry2(target.index);
                break;
            case 2:
                selectCountry(target.index);
                break;
            default:
                showProv2();
        }
    }
};

/!*ѡ��ʡ��֮����ʾ��ʡ�����г���*!/
function showCity2(index) {
    addrWrap.innerHTML = '';
    current2.prov = index;
    current2.provVal = provice[index].name;
    titleWrap[0].className = '';
    titleWrap[1].className = 'titleSel';
    var cityLen = provice[index].city.length;
    for (var j = 0; j < cityLen; j++) {
        var cityLi = document.createElement('li');
        cityLi.innerText = provice[index].city[j].name;
        cityLi.index = j;
        addrWrap.appendChild(cityLi);
    }
}

/!*ѡ�����֮����ʾ�ó�������������*!/
function showCountry2(index) {
    addrWrap.innerHTML = '';
    current2.city = index;
    current2.cityVal = provice[current2.prov].city[index].name;
    titleWrap[1].className = '';
    titleWrap[2].className = 'titleSel';
    var countryLen = provice[current2.prov].city[index].districtAndCounty.length;
    if (countryLen == 0) {
        addrShow02.value = current2.provVal + '-' + current2.cityVal;
    }
    for (var k = 0; k < countryLen; k++) {
        var cityLi = document.createElement('li');
        cityLi.innerText = provice[current2.prov].city[index].districtAndCounty[k];
        cityLi.index = k;
        addrWrap.appendChild(cityLi);
    }
}

/!*ѡ�о��������*!/
function selectCountry(index) {
    btn2.disabled = false;
    current2.country = index;
    addrWrap.getElementsByTagName('li')[index].style.backgroundColor = '#23B7E5';
    current2.countryVal = provice[current2.prov].city[current2.city].districtAndCounty[index];
}

/!*���ȷ����ָ��ɳ�ʼ״̬���ҽ���ѡ�ص���ʾ���������*!/
btn2.onclick = function () {
    addrShow02.value = current2.provVal + ' ' + current2.cityVal + ' ' + current2.countryVal;
    addrWrap.getElementsByTagName('li')[current2.country].style.backgroundColor = '';
};

/!*�ֱ���ʡ��������Ĵ�����*!/
document.getElementById('title-wrap').onclick = function (e) {
    var e = e || window.event;
    var target = e.target || e.srcElement;
    if (target && target.nodeName == 'LI') {
        for (var z = 0; z < 3; z++) {
            titleWrap[z].className = '';
        }
        target.className = 'titleSel';
        if (target.value == '0') {
            showProv2();
        } else if (target.value == '1') {
            showCity2(current2.prov);
        } else {
            showCountry2(current2.city);
        }
    }
};*/
