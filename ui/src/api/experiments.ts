import { AxiosResponse } from 'axios'
import { Experiment } from 'components/NewExperiment/types'
import { Experiment as ExperimentReponse } from './experiments.type'
import http from './http'

export const state = () => http.get('/experiments/state')

export const newExperiment = (data: Experiment) => http.post('/experiments/new', data)

export const experiments: (
  namespace?: string,
  name?: string,
  kind?: string,
  status?: string
) => Promise<AxiosResponse<ExperimentReponse[]>> = (namespace = '', name = '', kind = '', status = '') =>
  http.get(`/experiments?namespace=${namespace}&name=${name}&kind=${kind}&status=${status}`)

export const deleteExperiment = (namespace: string, name: string, kind: string) =>
  http.delete(`/experiments/${kind}/${namespace}/${name}`)

export const pauseExperiment = (namespace: string, name: string, kind: string) =>
  http.put(`/experiments/pause/${kind}/${namespace}/${name}`)

export const startExperiment = (namespace: string, name: string, kind: string) =>
  http.put(`/experiments/start/${kind}/${namespace}/${name}`)

export const detail = (namespace: string, name: string, kind: string) =>
  http.get(`/experiments/detail/${kind}/${namespace}/${name}`)
