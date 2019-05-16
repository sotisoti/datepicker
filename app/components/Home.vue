<template>
  <Page>
    <StackLayout>
      <StackLayout>
        <RadDataForm ref="dataform" :source="data" :metadata="dataMetadata"></RadDataForm>
      </StackLayout>
    </StackLayout>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      data: {
        birthday: ""
      },
      dataMetadata: {
        isReadOnly: false,
        commitMode: "Immediate",
        validationMode: "OnLostFocus",
        propertyAnnotations: [
          {
            name: "birthday",
            displayName: "Birthday",
            editor: "DatePicker"
          }
        ]
      }
    };
  }
};
</script>
