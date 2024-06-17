// app/Serializers/PostSerializer.ts

import BloodDonorUnit from '#models/blood_donor_unit'

interface BloodDonorUnitSerializerInterface {
  id: number
  name: string
  address: string
  province: string
  telp: string
  latitude: string
  longitude: string
}

export default class BloodDonorUnitSerializer {
  static single(data: BloodDonorUnit): BloodDonorUnitSerializerInterface {
    return {
      id: data.id,
      name: data.nama,
      address: data.alamat,
      province: data.provinsi,
      telp: data.telp,
      latitude: data.lat,
      longitude: data.lng,
    }
  }

  static collection(datas: BloodDonorUnit[]): BloodDonorUnitSerializerInterface[] {
    return datas.map((data) => this.single(data))
  }
}
