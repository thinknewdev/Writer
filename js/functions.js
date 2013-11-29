function writeJsonFile()
{
    var treeNode = Ext.getCmp('projectTree').getRootNode();
    //Show Tree Data in Console
    var treestring = JSON.stringify(treeNode.serialize());
    console.log(treestring);
    Ext.Ajax.request({
        url: 'data/pywritefile.py',
        params: {
            json: treestring
        },
        success: function(response){
            var text = response.responseText;
            console.log(text);
            // process server response here
        }
    });
}