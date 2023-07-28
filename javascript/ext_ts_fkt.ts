function get_browserpis():string
{
    let pis :string = "";
    for (let i=0; i < navigator.plugins.length; i++) {
        pis += navigator.plugins[i].name + ';' + navigator.plugins[i].filename + ';';
    }
    return pis;
}
get_browserpis()