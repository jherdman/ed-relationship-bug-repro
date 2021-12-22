import BaseSerializer from './application';

function transformRecordJSON(json) {
  json.relationships = {
    colours: {
      links: {
        self: `/colours?car-id=${json.id}`,
        related: `/colours?car-id=${json.id}`,
      },
    },
  };
}

export default BaseSerializer.extend({
  serialize() {
    const json = BaseSerializer.prototype.serialize.apply(this, arguments);

    if (Array.isArray(json.data)) {
      json.data.forEach(transformRecordJSON);
    } else {
      transformRecordJSON(json.data);
    }

    return json;
  },
});
