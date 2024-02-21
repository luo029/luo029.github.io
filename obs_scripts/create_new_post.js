module.exports = async (params) => {
    QuickAdd = params;

    const title = await QuickAdd.quickAddApi.inputPrompt("Blog - Title");


    QuickAdd.variables["articleTitle"] = title;
    QuickAdd.variables["articleTimestamp"] = QuickAdd.quickAddApi.date.now('YYYY-MM-DDTHH:mm:ssZ');

    console.log(QuickAdd.variables);
};